export default {
    serverPort: parseInt(process.env.PORT) || 80,

    dataSource: {
        host: process.env.DB_HOST,
        port: 31617,
        user: "mariadb",
        password: "mariadb",
        database: "db",
        connectionLimit: 10,
        connectTimeout: 20000,
    },
}
