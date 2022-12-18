const mybatisMapper = require("mybatis-mapper");
const con = require("../config/dataSource");


function getMapper(_mapperName) {
    const mapperName = _mapperName;

    return function (sql, params, callback) {
        mybatis(mapperName, sql, params, callback)
    }
}

function mybatis(mapperName, sql, params, callback) {
    let query = mybatisMapper.getStatement(mapperName, sql, params, {
        language: "sql",
        indent: "  ",
    });

    execute(query, callback)
}

function execute(query, callback) {
    console.log(query)

    con.query(query, function (error, results, fields) {
        if (error) throw error;
        if (callback) callback(results, fields);
    });
}


module.exports = {
    mybatis,
    getMapper,
    execute
}