const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');

const { format } = require('date-fns');
const { Config } = require('../config/config');

const conexion = require('../database/database');

module.exports.Authentication = {
    login: async (req, res) => {
        try {
            const user = req.body.user;
            const password = req.body.password;
    
            if (!user || !password) {
                return res.render('login', {
                    alert: true,
                    alertTitle: "Advertencia",
                    alertMessage: "El usuario o la contraseña son requeridos",
                    alertIcon: "Info",
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            } else {
                conexion.query('SELECT * FROM users WHERE user =? ', [user], async (error, results) => {
                    if (results.length == 0 || !(await bcrypt.compare(password, results[0].password))) {
                        return res.render('login', {
                            alert: true,
                            alertTitle: "Error",
                            alertMessage: "Usuario y/o Contraseña incorrecto",
                            alertIcon: "Error",
                            showConfirmButton: true,
                            timer: false,
                            ruta: 'login'
                        });
                    } else {
                        const id = results[0].id;
                        const token = jwt.sign({ id: id }, Config.JWT_SECRET_KEY, {
                            expiresIn: Config.JWT_TIME
                        });
                        const cookiesOptions = {
                            expires: new Date(Date.now() + Config.JWT_COOKIE_TIME * 24 * 60 * 60 * 1000),
                            httpOnly: true
                        }
                        res.cookie('jwt', token, cookiesOptions);
                        res.render('login', {
                            alert: true,
                            alertTitle: "Conexión exitosa",
                            alertMessage: "¡LOGIN CORRECTO!",
                            alertIcon: 'success',
                            showConfirmButton: false,
                            timer: 800,
                            ruta: ''
                        })
                    }
                });
            }
        } catch (error) {
            return res.status(500).send({ success: false, message: 'Error registering user' });
        }
    },
    isAuthenticated: async (req, res, next) => {
        if (req.cookies.jwt) {
            try {
                const decoded = await promisify(jwt.verify)(req.cookies.jwt, Config.JWT_SECRET_KEY)
                conexion.query('SELECT * FROM users WHERE user = ?', [decoded.user], (error, results) => {
                    if (!results) { return next() }
                    req.user = results[0]
                    return next()
                })
            } catch (error) {
                console.log(error);
                return next();
            }
        } else {
            res.redirect('login');
        }
    },
    logout: (req, res) => {
        try {
            res.clearCookie('jwt');
            res.redirect('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            res.redirect('/');
        }
    }
  };