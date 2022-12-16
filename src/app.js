const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 80;
const tl = require('express-tl')
const path = require('path');
const router = require('./routes/routes');

// 템플릿 엔진 세팅
app.engine('tl', tl)
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'tl')

// 부트스트랩
app.use(
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist/"))
);

// 라우터 세팅
app.use('/', router);


app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})


const db = require('./db_connection')

global.app = app;
global.db = db;

module.exports = app;
