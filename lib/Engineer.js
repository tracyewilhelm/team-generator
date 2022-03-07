const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(gitHub, role) {
    const gitHub = gitHub;
    const role = role
  }
  getgitHub() {
    console.log(`Name: ${this.gitHub}`);
  }
  getRole() {
    console.log("Engineer");
  }
    super(name, id, email)
} 

const engineer = new Engineer(getGitHub, "Engineer")
engineer.printInfo();
