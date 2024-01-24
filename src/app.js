const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const { TicketsAPI } = require('./routes/ticketRouter');
const { VistasAPI } = require('./routes/pageRouter');
const { AuthenticationAPI } = require('./routes/authRouter');
const { UsersAPI } = require('./routes/userRouter');
const { QuerysAPI } = require('./routes/queryRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

QuerysAPI(app);
VistasAPI(app);
TicketsAPI(app);
AuthenticationAPI(app);
UsersAPI(app);

module.exports = app;
