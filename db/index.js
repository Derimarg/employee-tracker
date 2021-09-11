const connection = require('./connection');

class employeeTDB {
    constructor(connection) {
        this.connection = connection;
    }

    // Show departments
    allDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department;");
    }
}

module.exports = new employeeTDB(connection);