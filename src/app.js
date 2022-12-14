const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 80;
console.log(port)

const router = require('./routes/routes');
app.use('/', router);


app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})

// const db = require('./db_connection')

module.exports = app;

