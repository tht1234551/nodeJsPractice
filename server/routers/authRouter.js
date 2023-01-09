import express from "express";

const router = express.Router();

router.get("/login", function (req, res) {
    res.render('users/login');
});

router.post("/login", (req, res) => {
    console.log(req.session)
    res.json({test:'aaaa'})
});

export default {
    path : "/auth",
    router : router
}