const express = require("express");
const { Querys } = require("../controllers/queryController");

const router = express.Router();

module.exports.QuerysAPI = (app) => {
  router.get("/getCategory", Querys.getCategory);

  app.use("/", router);
};
