const generateHTML = (response) => {
  const responseArray = response;
  //   console.log(response);
  let htmlHead = () => {
    let htmlString1 = `
    <!DOCTYPE html>
        <html lang="en-US">

            <head>
                <meta charset="UTF-8">
                    <title>My Team</title>
                    
            </head>
<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      background-color: lightblue;
    }
    h1 {
      height: 120px;
      padding-top: 80px;
      background: darkslateblue;
      text-align: center;
      color: white;
    }
    .container {
      padding: 8em 16em;
    }
    .card {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      width: 250px;
      height: fit-content;

      border-radius: 1em;
    }
    .card .top {
      background: darkcyan;
      height: 100px;

      padding: 1em;
      border-radius: 1em 1em 0 0;
    }
    .top :first-child {
      color: white;
      font-size: 30px;
    }
    .top :nth-child(2) {
      color: white;
      font-size: 25px;
    }
    .bottom {
      padding: 2em;
      background: grey;
      border-radius: 0 0 1em 1em;
      height: fit-content;
      width: fit-content;
    }
    .bottom ul {
      list-style: none;
      text-align: center;
    }
    .bottom ul li {
      width: 100%;
      background: white;
      border: 1px solid black;
      padding: 10px 0px;
    }
  </style>
            <body>
            <div class="header">
                 <header>
                    <h1>My Team</h1>
                 </header>
            </div>
            
            <section class="manager">`;
    return htmlString1;
  };

  //for loop to pull out manager information - is the role === "Manager"
  function managerHTML() {
    let manager = ``;
    console.log(responseArray);
    for (i = 0; i < responseArray.length; i++) {
      console.log(responseArray);
      if (responseArray[i].role === "Manager") {
        manager = manager.concat(`
                    
                    
                    <div class="container">
                        <div class="card">
                            <div class="top">
                                <div>
                                    <p>${responseArray[i].name}</p>
                                    <p>${responseArray[i].role}</p>
                                </div>
                            </div>
                            <div class="bottom">
                            <ul>
                                <li>Employee ID: ${responseArray[i].employeeID}</li>
                                <li>Email: <a href = "${responseArray[i].email}">${responseArray[i].email}</a></li>
                                <li>Office: ${responseArray[i].extra}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                `);
      } else console.log("nope!");
    }
    console.log(manager + "line 46");
    return manager;
  }

  let HTMLString2 = () => {
    let string2 = `          </section>

            <section class="engineer">`;
    return string2;
  };
  //for loop to pull out engineer information

  function engineerHTML() {
    let engineer = ``;

    for (i = 0; i < responseArray.length; i++) {
      if (responseArray[i].role === "Engineer") {
        engineer = engineer.concat(`
                    
                    <div class="container">
                        <div class="card">
                            <div class="top">
                                <div>
                                    <p>${responseArray[i].name}</p>
                                    <p>${responseArray[i].role}</p>
                                </div>
                            </div>
                            <div class="bottom">
                            <ul>
                                <li>Employee ID: ${responseArray[i].employeeID}</li>
                                <li>Email: <a href = "mailto:webmaster@example.com"${responseArray[i].email}>${responseArray[i].email}</a></li>
                                <li>GitHub: <a href = "https://github.com/${responseArray[i].extra}"target="_blank">${responseArray[i].extra}</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>`);
      } else console.log("nope!");
    }
    console.log(engineer + "line 77");
    return engineer;
  }

  let HTMLString3 = () => {
    let string3 = `           </section>
            
            <section class="intern">`;
    return string3;
  };

  //for loop to pull out intern informatin
  function internHTML() {
    let intern = ``;
    console.log(responseArray);
    for (i = 0; i < responseArray.length; i++) {
      console.log(responseArray);
      if (responseArray[i].role === "Intern") {
        intern = intern.concat(`
                   
                    <div class="container">
                        <div class="card">
                            <div class="top">
                                <div>
                                    <p>${responseArray[i].name}</p>
                                    <p>${responseArray[i].role}</p>
                                </div>
                            </div>
                            <div class="bottom">
                            <ul>
                                <li>Employee ID:${responseArray[i].employeeID}</li>
                                <li>Email: <a href = "mailto:webmaster@example.com"${responseArray[i].email}>${responseArray[i].email}</a></li>
                                <li>School: ${responseArray[i].extra}</li>
                            </ul>
                            </div>
                        </div>
                    </div>`);
      } else console.log("nope!");
    }
    console.log(intern + "line 108");
    return intern;
  }

  let HTMLString4 = () => {
    let string4 = `               </section >


            

            </body>

        </html>
`;
    return string4;
  };

  return (
    htmlHead() +
    managerHTML() +
    HTMLString2() +
    engineerHTML() +
    HTMLString3() +
    internHTML() +
    HTMLString4()
  );
};
module.exports = generateHTML;
