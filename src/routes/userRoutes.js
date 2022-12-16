const express = require("express");
const router = express.Router();
const service = require('../service/userService')
const con = require('../configuration/db_connection');

router.get("/login", function (req, res) {
  res.render('user/login');
});

router.get("/dbtest", function (req, res) {
  service.getNow((results, fields) => {
    res.json(results)
  });
});

router.get("/dbtest2", function (req, res) {
  service.calc((results, fields) => {
    res.json(results)
  });
});



module.exports = router;
