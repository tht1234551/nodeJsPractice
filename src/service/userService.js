const con = require("../config/dataSource");
const mybatisMapper = require("mybatis-mapper");

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
  getNow: (callback, params) => excuteQuery("getNow", params, callback),
  calc: (callback, params) => excuteQuery("calc", params, callback),
};
