const express = require("express");
const app = express();
const router = require('./src/routes/routes');
const port = 80;

app.use('/', router);

app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})

module.exports = app;