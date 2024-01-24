require("dotenv").config();

module.exports.Config = {
  PORT: process.env.PORT || 3001,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,

  JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
  JWT_TIME : process.env.JWT_TIME,
  JWT_COOKIE_TIME : process.env.JWT_COOKIE_TIME,
};