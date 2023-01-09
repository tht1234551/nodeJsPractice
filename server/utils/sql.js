import mybatisMapper from "mybatis-mapper";
import {getConnection} from "../configs/database.js"

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

    execute(query, callback);
}

async function execute(query, callback) {
    console.log(`[${new Date().toLocaleString()}] Execute Query`);
    console.log(query);

    const conn = await getConnection();
    const rows = await new Promise((resolve, reject) => {
        conn.query(query, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })

    callback(rows);
    conn.release();

    // try {
    //     await conn.beginTransaction() // 트랜잭션 적용 시작
    //
    //     await conn.commit() // 커밋
    //     return callback(null, rows)
    // } catch (err) {
    //     callback(err)
    //     await conn.rollback() // 롤백
    // } finally {
    //
    // }

}


export default {
    mybatis,
    getMapper,
    execute
}
