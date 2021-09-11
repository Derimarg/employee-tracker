// Get the client
const mysql = require('mysql2');

// Create the connection to database
const db = mysql.createConnection({

    // MySQL username and password
    host: 'localhost',
    username: 'root',
    password: 'admin',
    database: 'employees'
});

// Database connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

module.exports = db;