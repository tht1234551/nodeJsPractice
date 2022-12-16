const mybatisMapper = require("mybatis-mapper");
const con  = require('./db_connection')
const path = require("path");
const fs = require("fs");

const folderPath = "../mapper/";

function readAllMapper() {
    fs.readdir(path.join(__dirname, folderPath), (err, files) => {
      if (err) throw err;
      files.forEach((file) =>
        mybatisMapper.createMapper([path.join(__dirname, folderPath + file)])
      );
    });
}

function excuteQuery(sql, params, callback) {
  let query = mybatisMapper.getStatement("userMapper", sql, params, {
    language: "sql",
    indent: "  ",
  });
    
  console.log(query)

  con.query(query, function (error, results, fields) {
    if (error) throw error;
    if (callback) callback(results, fields);
  });
}

module.exports = {
  readAllMapper,
  excuteQuery
};
