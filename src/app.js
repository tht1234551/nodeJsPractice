const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 80;

const router = require('./routes/routes');
app.use('/', router);

app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})

app.get((req, res) => {
    res.status(404).send('not found');
});

const db = require('./db_connection')

module.exports = app;
