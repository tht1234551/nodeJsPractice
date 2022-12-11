const express = require("express");
const app = express();
const port = 80;

app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(port, () => {
    console.log(`app is running on PORT ${port}`)
})

module.exports = app;