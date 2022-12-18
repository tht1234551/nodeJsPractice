const sql = require('../util/sql');
const userMapper = sql.getMapper("userMapper");

module.exports = {
  getNow: (callback, params) => userMapper("getNow", params, callback),
  calc: (callback, params) => userMapper("calc", params, callback),
  selectAll:()=>{},
  select:()=>{},
  insert:()=>{},
  update:()=>{},
  remove:()=>{},
};
