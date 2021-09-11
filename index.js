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
      console.log(`
    ============
    Options List
    ============`);

      switch (options) {
        case "view_all_departments":
          viewAllDepartments();
          break;
        case "view_all_roles":
          viewAllRoles();
          break;
        case "view_all_employees":
          viewAllEmployees();
          break;
        case "add_a_department":
          addADepartment();
          break;
        case "add_a_role":
          addARole();
          break;
        case "add_an_employee":
          addAnEmployee();
          break;
        case "update_an_employee_role":
          updateAnEmployeeRole();
          break;
        default:
          exitTracker();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function exitTracker() {
  process.exit();
}

init();
