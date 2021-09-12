const inquirer = require("inquirer");
const db = require("./db");
const cTable = require("console.table");

const choices = [
  {
    type: "list",
    name: "options",
    message: "Please select a option:",
    choices: [
      {
        name: "View all departments",
        value: "view_all_departments",
      },
      {
        name: "View all roles",
        value: "view_all_roles",
      },
      {
        name: "View all employees",
        value: "view_all_employees",
      },
      {
        name: "Add a department",
        value: "add_a_department",
      },
      {
        name: "Add a role",
        value: "add_a_role",
      },
      {
        name: "Add an employee",
        value: "add_an_employee",
      },
      {
        name: "Update an employee role",
        value: "update_an_employee_role",
      },
      {
        name: "Exit",
        value: "exit",
      },
    ],
  },
];

// Initialize app tracker
function init() {
  inquirer
    .prompt(choices)
    .then((res) => {
      let options = res.options;

      // Conditions depending on the user selection
      switch (options) {
        case "view_all_departments":
          viewAllDepartments();
          break;
        case "add_a_department":
          addADepartment();
          break;
        case "view_all_roles":
          viewAllRoles();
          break;
        case "add_a_role":
          addARole();
          break;
        case "view_all_employees":
          viewAllEmployees();
          break;
        case "add_an_employee":
          addAnEmployee();
          break;
        // case "update_an_employee_role":
        //   updateAnEmployeeRole();
        //   break;
        default:
          exitTracker();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function viewAllDepartments() {
  db.allDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => init());
}

function addADepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Provide department name!",
      },
    ])
    .then((res) => {
      let name = res;
      db.addDepartment(name)
        .then(() =>
          console.log(`
==========================================
${name.name} department added to database!
==========================================`)
        )
        .then(() => console.log("\n"))
        .then(() => init());
    })
    .catch((err) => {
      console.log(err);
    });
}

function viewAllRoles() {
  db.allRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => init());
}

function addARole() {
  db.allDepartments().then(([rows]) => {
    let departments = rows;
    const departmentOptions = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          name: "title",
          message: "Provide name of the role!",
        },
        {
          name: "salary",
          message: "Provide salary rate!",
        },
        {
          type: "list",
          name: "department_id",
          message: "Provide department of role!",
          choices: departmentOptions,
        },
      ])
      .then((role) => {
        db.addRole(role)
          .then(() =>
            console.log(`
==========================================
${role.title} role added to database!
==========================================`)
          )
          .then(() => console.log("\n"))
          .then(() => init());
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function viewAllEmployees() {
  db.allEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => init());
}

function addAnEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        message: "Provide employee first name!",
      },
      {
        name: "last_name",
        message: "Provide employee last name!",
      },
    ])
    .then((res) => {
      let firstName = res.first_name;
      let lastName = res.last_name;

      db.allRoles().then(([rows]) => {
        let roles = rows;
        const roleOptions = roles.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt({
            type: "list",
            name: "roleId",
            message: "Select Employee Role!",
            choices: roleOptions,
          })
          .then((res) => {
            let roleId = res.roleId;

            db.allEmployees()
              .then(([rows]) => {
                let employees = rows;
                const managerOptions = employees.map(
                  ({ id, first_name, last_name }) => ({
                    name: `${first_name} ${last_name}`,
                    value: id,
                  })
                );

                managerOptions.unshift({ name: "None", value: null });

                inquirer
                  .prompt({
                    type: "list",
                    name: "managerId",
                    message: "Provide employee's manager",
                    choices: managerOptions,
                  })
                  .then((res) => {
                    let employee = {
                      manager_id: res.managerId,
                      role_id: roleId,
                      first_name: firstName,
                      last_name: lastName,
                    };

                    db.addEmployee(employee);
                  })
                  .then(() =>
                    console.log(`
=====================================================
${firstName} ${lastName}, employee added to database!
=====================================================`)
                  )
                  .then(() => console.log("\n"))
                  .then(() => init());
              })
              .catch((err) => {
                console.log(err);
              });
          });
      });
    });
}

function exitTracker() {
  process.exit();
}

init();