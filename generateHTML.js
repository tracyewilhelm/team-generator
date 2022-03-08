// function managerCard ()

function generateHTML(response) {
  let htmlString1 = `
    < !DOCTYPE html >
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
  //for loop to pull out manager information - is the role === "Manager"

  let managerHTML = `                <div class="box" id="manager">    
                    <div class="title"><h2>${response.roll}</h2></div>
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.officeNumber}</p>

                    </div>
                </div>`;
  let HTMLString2 = `          </section>

            <section class="engineer">`;
  //for loop to pull out engineer information

  let engineerHTML = `                <div class="box" id="engineer">    
                    <div class="title"><h2>${response.roll}</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.gitHubUserID}</p>
                    </div>
                </div>`;

  let HTMLString3 = `           </section>
            
            <section class="intern">`;

  //for loop to pull out intern informatin

  let internHTML = `                <div class="box" id="intern">    
                    <div class="title"><h2>${response.roll}</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.school}</p>
                    </div>
                </div>`;

  let HTMLString4 = `               </section >


            

            </body>

        </html>
`;
}

module.exports = generateHTML;
