const express = require("express");
const router = express.Router();
const service = require('../mapper/userMapper')
const con = require('../config/dataSource');

router.get("/login", function (req, res) {
  res.render('user/login');
});

router.get("/", function (req, res) {
  service.selectAll(null,(results) => {
    res.json(results)
  });
});

router.get("/:email", function (req, res) {
  service.select(req.params,(results) => {
    res.json(results[0])
  });
});

router.post("/:email", function (req, res) {
  service.delete(req.params,(results) => {
    res.json(results[0])
  });
});
router.delete("/:email", function (req, res) {
  service.delete(req.params,(results) => {
    res.json(results[0])
  });
});



module.exports = router;
