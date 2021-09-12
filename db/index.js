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

    // Show employees
    allEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
}

module.exports = new employeeTrackerDB(connection);