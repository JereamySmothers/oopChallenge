// create team
const generateTeam = team => {

    //create manager html
    const generateManager = manager => {

        return `
        <div class="card">
        <div class="cardHeader">
            <h2 class="cardTitle">${manager.getName()}</h2>
            <h3 class="cardTitle">${manager.getRole()}</h3>
        </div>
        <div class="cardBody">
            <ul class="listGroup">
                <li class="listItems">ID: ${manager.getId()}</li>
                <li class="listItems">Email: ${manager.getEmail()}</li>
                <li class="listItems">Number: ${manager.getNumber()}</li>
            </ul>
        </div>
    </div>
    `;
    };

    // create engineers html


    //create interns html

}

//export to generate page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        <link rel="stylesheet" href="style.css">        
        <title>The Team</title>
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class=" col-12  justify-content-center d-flex">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}

