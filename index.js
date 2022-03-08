const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    return "You have entered an invalid email address!";
  }
}

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
      type: "list",
      message: "What is this employee's roll:",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
    },
  ])
  .then((response) => {
    if (response.getRole == "Manager") {
      return inquirer.prompt([
        {
          type: "input",
          message: "what is their office number?",
          name: "officeNumber",
        },
      ]);
    }
    if (response.getRole == "Engineer") {
      return inquirer.prompt([
        {
          type: "input",
          message: "what is their GitHub username?",
          name: "gitHubUserID",
        },
      ]);
    }
    if (response.getRole == "Intern") {
      return inquirer.prompt([
        {
          type: "input",
          message: "what school did they go to?",
          name: "school",
        },
      ]);
    }
  })
  .then((response) => {
    console.log(response);
    const HTML = generateHTML(response);

    fs.writeFile("index.html", HTML, (err) => {
      err ? console.error(err) : console.log("Success");
    });
  });
