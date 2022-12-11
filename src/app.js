const app = require("../index");

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/cat", (req, res) => {
    res.json({sound: "야옹"});
});

app.get("/dog", (req, res) => {
    res.send("멍멍");
});

app.get("/user/:id", (req, res) => {
    const {id} = req.params;
    res.send(id);
});

