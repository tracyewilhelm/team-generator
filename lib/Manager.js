const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber, role) {
    const officeNumber = officeNumber;
    const role = role
  }
  getOfficeNumber() {
    console.log(`Name: ${this.officeNumber}`);
  }
  getRole() {
    console.log("Manager");
  }
    super(name, id, email)
} 

const manager = new Manager(getOfficeNumber, "Manager")
manager.printInfo();
