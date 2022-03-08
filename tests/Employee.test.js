const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing employee name, id, and email", () => {
      const emp = new Employee("Sam", "2319", "sam@sam.com");

      expect(emp.name).toEqual("Sam");
      expect(emp.id).toEqual("2319");
      expect(emp.email).toEqual("sam@sam.com");
    });
  });

  describe("employeeFunctions", () => {
    it("should return employee name", () => {
      const emp = new Employee("Sam", "2319", "sam@sam.com");
      const name = emp.getName();
      expect(name).toEqual("Sam");
    });
    it("should return employee ID", () => {
      const emp = new Employee("Sam", "2319", "sam@sam.com");
      const employeeID = emp.getID();
      expect(employeeID).toEqual("2319");
    });
    it("should return employee email", () => {
      const emp = new Employee("Sam", "2319", "sam@sam.com");
      const email = emp.getEmail();
      expect(email).toEqual("sam@sam.com");
    });
    it("should return employee role", () => {
      const emp = new Employee("Sam", "2319", "sam@sam.com");
      const role = emp.getRole();
      expect(role).toEqual("Employee");
    });
  });
});
