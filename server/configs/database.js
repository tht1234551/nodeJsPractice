import mysql from 'mysql';
import config from "./config.js";

let pool;

export function init() {
    pool = mysql.createPool(config.dataSource);
}

export function getConnection() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) reject(err);
            resolve(connection)
        })
    })
}