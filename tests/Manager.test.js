const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing manager name, id, email, and office number", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");

      expect(emp.name).toEqual("Sam");
      expect(emp.id).toEqual("2319");
      expect(emp.email).toEqual("sam@sam.com");
      expect(emp.officeNumber).toEqual("42A");
    });
  });
  describe("ManagerFunctions", () => {
    it("should return Manager name", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");
      const name = emp.getName();
      expect(name).toEqual("Sam");
    });
    it("should return Manager ID", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");
      const ManagerID = emp.getID();
      expect(ManagerID).toEqual("2319");
    });
    it("should return Manager email", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");
      const email = emp.getEmail();
      expect(email).toEqual("sam@sam.com");
    });
    it("should return Manager role", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");
      const role = emp.getRole();
      expect(role).toEqual("Manager");
    });
    it("should return Manager office number username", () => {
      const emp = new Manager("Sam", "2319", "sam@sam.com", "42A");
      const officeNumber = emp.getOfficeNumber();
      expect(officeNumber).toEqual("42A");
    });
  });
});
