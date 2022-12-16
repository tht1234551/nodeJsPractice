const mysql = require("mysql");
const config = require('./config')

const con = mysql.createConnection(config.dataSource);

con.connect((err) => {
  if (err) throw err;
  console.log(`[${new Date().toLocaleString()}] Database Connected!`);
});

module.exports = con;
