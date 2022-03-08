const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamMembers = [];

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return "You have entered an invalid email address!";
  }
}

const init = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do next?",
        choices: [
          "Add a manager",
          "Add an engineer",
          "Add an intern",
          "Finish building my team",
        ],
        name: "employeeChoice",
      },
    ])
    .then((response) => {
      if (response.employeeChoice === "Add a manager") {
        createManager();
      } else if (response.employeeChoice === "Add an engineer") {
        createEngineer();
      } else if (response.employeeChoice === "Add an intern") {
        createIntern();
      } else {
        finishTeam();
      }
    });
};

let createManager = function () {
  inquirer
    .prompt([
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
        validate: ValidateEmail,
      },
      {
        type: "input",
        message: "What is their office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const { employeeName, employeeID, emailAddress, officeNumber } = response;
      const manager = new Manager(
        employeeName,
        employeeID,
        emailAddress,
        officeNumber
      );
      teamMembers.push(manager);
      init();
    });
};
let createEngineer = function () {
  inquirer
    .prompt([
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
        validate: ValidateEmail,
      },
      {
        type: "input",
        message: "What is their GitHub username?",
        name: "gitHubName",
      },
    ])
    .then((response) => {
      const { employeeName, employeeID, emailAddress, gitHubName } = response;
      const engineer = new Engineer(
        employeeName,
        employeeID,
        emailAddress,
        gitHubName
      );
      teamMembers.push(engineer);
      init();
    });
};
let createIntern = function () {
  inquirer
    .prompt([
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
        validate: ValidateEmail,
      },
      {
        type: "input",
        message: "What school did they attend?",
        name: "school",
      },
    ])
    .then((response) => {
      const { employeeName, employeeID, emailAddress, school } = response;
      const intern = new Intern(employeeName, employeeID, emailAddress, school);
      teamMembers.push(intern);
      init();
    });
};

let finishTeam = function () {
  const finalTeam = [];
  for (let member of teamMembers) {
    let name = member.getName;
    let employeeID = member.getID;
    let email = member.getEmail;
    let role = member.getRole;

    if (role === "Manager") {
      extra = member.getOfficeNumber;
    } else if (role === "Engineer") {
      extra = member.getgitHub;
    } else {
      extra = member.getSchool;
    }
    teamObject = { name, employeeID, email, role, extra };
    finalTeam.push(teamObject);
  }
  createHTML(data);
};

const createHTML = function (data) {
  const HTML = generateHTML(data);
  fs.writeFile("src/index.html", HTML, (err) => {
    err ? console.error(err) : console.log("Success");
  });
};
