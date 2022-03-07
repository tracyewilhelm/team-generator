const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "Employee Name:",
    name: "employeeName",
  },
  {
    type: "input",
    message: "Employee ID:",
    name: "employeeID",
  },
  {
    type: "input",
    message: "Email Address:",
    name: "emailAddress",
  },
  {
    type: "list",
    message: "What is this employee's roll:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
]);
