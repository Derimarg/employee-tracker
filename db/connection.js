// Get the cliet
const mysql = require('mysql2');

// Create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    // MySQL username
    username: 'root',
    // MySQL password
    password: 'admin',
    database: 'employees'
});

module.exports = db;