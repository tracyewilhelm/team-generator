const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing Intern name, id, and email", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");

      expect(emp.name).toEqual("Sam");
      expect(emp.id).toEqual("2319");
      expect(emp.email).toEqual("sam@sam.com");
      expect(emp.school).toEqual("school");
    });
  });
  describe("InternFunctions", () => {
    it("should return Intern name", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");
      const name = emp.getName();
      expect(name).toEqual("Sam");
    });
    it("should return Intern ID", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");
      const InternID = emp.getID();
      expect(InternID).toEqual("2319");
    });
    it("should return Intern email", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");
      const email = emp.getEmail();
      expect(email).toEqual("sam@sam.com");
    });
    it("should return Intern role", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");
      const role = emp.getRole();
      expect(role).toEqual("Intern");
    });
    it("should return Intern school", () => {
      const emp = new Intern("Sam", "2319", "sam@sam.com", "school");
      const school = emp.getSchool();
      expect(school).toEqual("school");
    });
  });
});
