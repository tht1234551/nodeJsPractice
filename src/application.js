const express = require("express");
const app = express();
global.app = app;
const config = require('./config/config');
const port = config.serverPort;
const con = require("./config/dataSource");
const mybatisSettings = require("./config/mybatisSettings");
const path = require("path");
const defaultRouter = require("./route/defaultRoute");
const userRouter = require("./route/userRoute");
require("./config/viewEngine")



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
