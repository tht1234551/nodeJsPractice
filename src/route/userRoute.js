const express = require("express");
const router = express.Router();
const service = require('../service/userService')

router.get("/login", function (req, res) {
  res.render('user/login');
});

router.get("/:email", function (req, res) {
  service.select(req.params,(results) => {
    res.json(results[0])
  });
});
router.get("/", function (req, res) {
  service.selectAll(null,(results) => {
    res.json(results)
  });
});
router.post("/", function (req, res) {
  service.delete(req.params,(results) => {
    res.json(results[0])
  });
});
router.delete("/", function (req, res) {
  service.delete(req.params,(results) => {
    res.json(results[0])
  });
});
router.put("/", function (req, res) {
  service.update(req.params,(results) => {
    res.json(results[0])
  });
});



module.exports = router;
