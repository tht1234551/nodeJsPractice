import sql from '../utils/sql.js'

const userMapper = sql.getMapper("userMapper");

export default {
    selectAll: (params, callback) => userMapper("selectAll", params, callback),
    select: (params, callback) => userMapper("select", params, callback),
    insert: (params, callback) => userMapper("insert", params, callback),
    update: (params, callback) => userMapper("update", params, callback),
    delete: (params, callback) => userMapper("delete", params, callback),
}