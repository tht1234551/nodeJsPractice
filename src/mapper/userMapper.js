const sql = require('../util/sql');
const userMapper = sql.getMapper("userMapper");

module.exports = {
    getNow: (params, callback) => userMapper("getNow", params, callback),
    calc: (params, callback) => userMapper("calc", params, callback),
    selectAll: (params, callback) => userMapper("selectAll", params, callback),
    select: (params, callback) => userMapper("select", params, callback),
    insert: (params, callback) => userMapper("insert", params, callback),
    update: () => null,
    delete: (params, callback) => userMapper("delete", params, callback),
};
