const connection = require('./connection');

class employeeTrackerDB {
    constructor(connection) {
        this.connection = connection;
    }

    // Show departments
    allDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department;");
    }

    // Show roles
    allRoles() {
        return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;");
    }
}

module.exports = new employeeTrackerDB(connection);