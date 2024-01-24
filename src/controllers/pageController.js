const authController = require('../controllers/authController');

module.exports.Vistas = {
    vistaDashboard: (req, res) => {
        res.render('index', { user: req.user });
    },
    vistaRegisterUser: (req, res) => {
        res.render('registerUser')
    },
    vistaCharts: (req, res) => {
        res.render('chartjs')
    },
    vistaLogin: (req, res) => {
        res.render('login', {alert: false})
    },
    vista404: (req, res) => {
        res.render('error-404')
    },
    vistaProfile: (req, res) => {
        res.render('profile')
    },
    vistaEmployees: (req, res) => {
        res.render('employees')
    },
    vistaTickets: (req, res) => {
        res.render('tickets')
    }
}