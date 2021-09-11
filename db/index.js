const connection = require('./connection');

class employeeTDB {
    constructor(connection) {
        this.connection = connection;
    }

    allEmployees() {
        return this.connection.promise().query(
            
        )
    }
}

module.exports = new employeeTDB(connection);