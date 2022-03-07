const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school, role) {
    const school = school;
    const role = role
  }
  getSchool() {
    console.log(`Name: ${this.school}`);
  }
  getRole() {
    console.log("Intern");
  }
    super(name, id, email)
} 

const intern = new Intern(getSchool, "Intern")
intern.printInfo();
