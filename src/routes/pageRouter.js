const express = require('express');

const { Vistas } = require('../controllers/pageController');

const router = express.Router();

module.exports.VistasAPI = (app) => {
    router
    .get('/', Vistas.vistaDashboard)
    .get('/index', Vistas.vistaDashboard)
    .get('/register-user', Vistas.vistaRegisterUser)
    .get('/profile', Vistas.vistaProfile)
    .get('/chartjs', Vistas.vistaCharts)
    .get('/login', Vistas.vistaLogin)
    .get('/error-404', Vistas.vista404)
    .get('/employees', Vistas.vistaEmployees)
    .get('/tickets', Vistas.vistaTickets)

    app.use('/', router);
}