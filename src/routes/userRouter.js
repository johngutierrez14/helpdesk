const express = require('express');

const { Users } = require('../controllers/userController');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
    .post('/register_user', Users.register)

    app.use('/', router);
}
