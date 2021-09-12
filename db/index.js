const connection = require("./connection");

class employeeTrackerDB {
  constructor(connection) {
    this.connection = connection;
  }

  //* DEPARTMENT SECTION //

  // Show departments
  allDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }

  // Add department
  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  // Delete department
  removeDepartment(department) {
    return this.connection
      .promise()
      .query("DELETE FROM department WHERE id = ?", department);
  }

  //* ROLE SECTION //

  // Show roles
  allRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
      );
  }

  // Add role
  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  //* EMPLOYEE SECTION //

  // Show employees
  allEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
      );
  }

  // Add employee
  addEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  // Update employee role
  updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }
}

module.exports = new employeeTrackerDB(connection);
