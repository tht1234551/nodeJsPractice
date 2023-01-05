import express from "express";
import service from "../services/userService.js"

const router = express.Router();

router.get("/", function (req, res) {
  service.selectAll(null,(results) => {
    res.json(results)
  });
});

router.get("/:email", function (req, res) {
  service.select(req.params,(results) => {
    const user = results[0] || {};

    res.json(user)
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

export default {
  path : "/users",
  router : router
}

