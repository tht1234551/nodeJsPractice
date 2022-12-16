module.exports = {
    serverPort: parseInt(process.env.PORT) || 80,
    
    dataSource: {
        host: process.env.DB_HOST,
        port: 31617,
        user: "mariadb",
        password: "mariadb",
        database: "db",
        connectTimeout: 20000,
    },
}