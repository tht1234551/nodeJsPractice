const mapper = require("../mapper/userMapper");

module.exports = {
    selectAll: (params, callback) => {
        mapper.selectAll(params,(results) => {

            if(callback) callback(results);
        });
    },
    select: (params, callback) => {
        mapper.select(params,(results) => {

            if(callback) callback(results);
        });
    },
    insert: (params, callback) => {
        mapper.insert(params,(results) => {

            if(callback) callback(results);
        });
    },
    update: (params, callback) => {
        mapper.update(params,(results) => {

            if(callback) callback(results);
        });
    },
    delete: (params, callback) => {
        mapper.delete(params,(results) => {

            if(callback) callback(results);
        });
    },
};