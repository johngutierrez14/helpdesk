const express = require('express');

const { Authentication } = require('../controllers/authController');

const router = express.Router();

module.exports.AuthenticationAPI = (app) => {
    router
    .post('/login', Authentication.login)
    .get('/logout', Authentication.logout)

    app.use('/', router);
}