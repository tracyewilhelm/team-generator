class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// generateHTMLCard(){
//  ` <div class="box" id="manager">
//                     <div class="title"><h2>${this.role}</h2></div>
//                     <div class="info">
//                         <p>${this.name}</p>
//                         <p>${this.employeeID}</p>
//                         <p>${this.emailAddress}</p>
//                         <p>${this.extra}</p>

//                     </div>
//                 </div>`
// };

module.exports = Employee;
