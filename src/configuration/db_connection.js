const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 31617,
  user: "mariadb",
  password: "mariadb",
  database: "db",
  connectTimeout: 20000,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = con;
