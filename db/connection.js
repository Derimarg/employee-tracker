const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // MySQL Username and Password
  user: "root",
  password: "admin",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;