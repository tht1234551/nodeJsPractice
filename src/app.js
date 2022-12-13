const express = require("express");
const app = express();
const port = 80;

const router = require('./routes/routes');
app.use('/', router);

app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})

const db = require('./db_connection')

module.exports = app;