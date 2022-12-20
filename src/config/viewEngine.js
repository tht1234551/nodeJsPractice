const tl = require("express-tl");
const path = require("path");
const app = global.app;

// 템플릿 엔진 세팅
app.engine("tl", tl);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "tl");

