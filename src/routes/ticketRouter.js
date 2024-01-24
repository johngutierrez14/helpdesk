const express = require('express');

const { Tickets } = require('../controllers/ticketController');

const router = express.Router();

module.exports.TicketsAPI = (app) => {
    router
    .get("", (req, res)=>{})
    .get("", (req, res)=>{})
    .get("", (req, res)=>{})

    app.use('/', router);
}
