const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1q2w3e4r",
    database: "book"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = con;