const express = require("express");
const router = express.Router();

router.get("/:view", function (req, res) {
  const { view } = req.params;
  res.render(view);
});


module.exports = router;
