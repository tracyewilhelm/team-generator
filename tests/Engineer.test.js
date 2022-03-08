const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing Engineer name, id, and email", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");

      expect(emp.name).toEqual("Sam");
      expect(emp.id).toEqual("2319");
      expect(emp.email).toEqual("sam@sam.com");
      expect(emp.gitHub).toEqual("gitHub");
    });
  });
  describe("EngineerFunctions", () => {
    it("should return Engineer name", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");
      const name = emp.getName();
      expect(name).toEqual("Sam");
    });
    it("should return Engineer ID", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");
      const EngineerID = emp.getID();
      expect(EngineerID).toEqual("2319");
    });
    it("should return Engineer email", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");
      const email = emp.getEmail();
      expect(email).toEqual("sam@sam.com");
    });
    it("should return Engineer role", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");
      const role = emp.getRole();
      expect(role).toEqual("Engineer");
    });
    it("should return Engineer gitHub username", () => {
      const emp = new Engineer("Sam", "2319", "sam@sam.com", "gitHub");
      const gitHub = emp.getgitHub();
      expect(gitHub).toEqual("gitHub");
    });
  });
});
