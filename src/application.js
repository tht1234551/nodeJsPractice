const express = require("express");
const app = express();
const config = require('./config/config');
const port = config.serverPort;
const con = require("./config/dataSource");
const mybatisSettings = require("./config/mybatisSettings");
const tl = require("express-tl");
const path = require("path");
const defaultRouter = require("./route/defaultRoute");
const userRouter = require("./route/userRoute");



// 템플릿 엔진 세팅
app.engine("tl", tl);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "tl");

// 부트스트랩
app.use(
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/"))
);

// 라우터 세팅
app.get('/', (req, res) => res.render('index'));
app.use("/views", defaultRouter);
app.use("/users", userRouter);


app.get("/admin", (req, res) => {
  res.redirect(process.env.DB_ADMIN);
});

app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] app is running on PORT ${port}`);
});


module.exports = app;
