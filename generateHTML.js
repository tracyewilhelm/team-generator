
function managerCard ()

function generateHTML(response) {
  return `
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
            
            <section class="manager">
                <div class="box" id="manager">    
                    <div class="title"><h2>${response.roll}</h2></div>
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.officeNumber}</p>

                    </div>
                </div>
            </section>

            <section class="engineer">
                <div class="box" id="engineer">    
                    <div class="title"><h2>${response.roll}</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.gitHubUserID}</p>
                    </div>
                </div>
            </section>
            
            <section class="intern">
                <div class="box" id="intern">    
                    <div class="title"><h2>${response.roll}</h2></div>
                
                    <div class="info">
                        <p>${response.name}</p>
                        <p>${response.employeeID}</p>
                        <p>${response.emailAddress}</p>
                        <p>${response.school}</p>
                    </div>
                </div>
            </section>


            

            </body>

        </html>
`;
}
