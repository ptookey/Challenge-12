const mysql = require("mysql2")

const dataBase = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "root",
    password: "root",
    database: "company_db"
});

module.exports = dataBase;