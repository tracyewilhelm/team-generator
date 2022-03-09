// console.log(response);

const generateHTML = (response) => {
  let htmlHead = () => {
    let htmlString1 = `
    <!DOCTYPE html>
        <html lang="en-US">

            <head>
                <meta charset="UTF-8">
                    <title>My Team</title>
                    <link rel="stylesheet" href="./Assets/style.css">
            </head>

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
  let managerHTML = () => {
    let manager = `
                    <div class="box" id="manager">    
                    <div class="title"><h2>Managers</h2></div>
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.officeNumber}</p>

                    </div>
                </div>`;
    return manager;
  };

  let HTMLString2 = () => {
    let string2 = `          </section>

            <section class="engineer">`;
    return string2;
  };
  //for loop to pull out engineer information

  let engineerHTML = () => {
    let engineer = `                <div class="box" id="engineer">    
                    <div class="title"><h2>Engineers</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.gitHubUserID}</p>
                    </div>
                </div>`;
    return engineer;
  };

  let HTMLString3 = () => {
    let string3 = `           </section>
            
            <section class="intern">`;
    return string3;
  };

  //for loop to pull out intern informatin
  let internHTML = () => {
    let intern = `                <div class="box" id="intern">    
                    <div class="title"><h2>Interns</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.school}</p>
                    </div>
                </div>`;
    return intern;
  };

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
