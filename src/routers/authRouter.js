import express from "express";

const router = express.Router();

router.get("/login", function (req, res) {
    res.render('users/login');
});

export default {
    path : "/auth",
    router : router
}