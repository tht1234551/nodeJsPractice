const mybatisMapper = require("mybatis-mapper");
const con = require("../config/dataSource");


/**
 *
 * @param {String} _mapperName
 * @returns {(sql: String, params: Object, callback: (result: Array<Object>) => void) => void}
 */
function getMapper(_mapperName) {
    const mapperName = _mapperName;

    return function (sql, params, callback) {
        mybatis(mapperName, sql, params, callback)
    }
}

function mybatis(mapperName, sql, params, callback) {
    const query = mybatisMapper.getStatement(mapperName, sql, params, {
        language: "sql",
        indent: "  ",
    });

    execute(query, callback)
}

function execute(query, callback) {
    console.log(`[${new Date().toLocaleString()}] Execute Query`);
    console.log(query);

    con.query(query, function (error, results) {
        if (error) throw error;
        if (callback) callback(results);
    });
}


module.exports = {
    mybatis,
    getMapper,
    execute
}