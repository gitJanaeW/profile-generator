const generateTemplate = teamArray => { 
    let teamHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Meet the Team</title>
    </head>
    <body class="bg-light">
        <header class="py-4 bg-info text-center">
            <h1 class="text-dark">Meet the Team</h1>
        </header>
        <main class="d-flex justify-content-around flex-wrap">`;

    for(var i = 0; i < teamArray.length; i++){
        if(teamArray[i].getJob() === "Engineer") {
            teamHtml += `
            <section class="mx-2 p-4 card col-3 my-4 ">
                <div class="card-header bg-info text-dark p-3">
                    <h2 class="h1">${teamArray[i].employeeName}</h2>
                    <h3 class="h2">👓${teamArray[i].getJob()}</h3>
                </div>
                <div class="card-body bg-light d-flex justify-content-center flex-column">
                    <p class="card h4 p-2 w-100 my-0">ID: ${teamArray[i].id}</p>
                    <p class="card h4 p-2 w-100 my-0">Email: ${teamArray[i].email}</p>
                    <p class="card h4 p-2 w-100 my-0">GitHub: ${teamArray[i].github}</p>
                </div>
            </section>
            `;
        } else if(teamArray[i].getJob() === "Intern") {
            console.log("SHOULD SEE SOMETHING HERE");
            teamHtml += `
            <section class="mx-2 p-4 card col-3 my-4 ">
                <div class="card-header bg-info text-dark p-3">
                    <h2 class="h1">${teamArray[i].employeeName}</h2>
                    <h3 class="h2">🎓${teamArray[i].getJob()}</h3>
                </div>
                <div class="card-body bg-light d-flex justify-content-center flex-column">
                    <p class="card h4 p-2 w-100 my-0">ID: ${teamArray[i].id}</p>
                    <p class="card h4 p-2 w-100 my-0">Email: ${teamArray[i].email}</p>
                    <p class="card h4 p-2 w-100 my-0">School: ${teamArray[i].school}</p>
                </div>
            </section>
            `;
        } else if(teamArray[i].getJob() === "Manager") {
            teamHtml += `
            <section class="mx-2 p-4 card col-5 my-4 ">
                <div class="card-header bg-info text-dark p-3">
                    <h2 class="h1">${teamArray[i].employeeName}</h2>
                    <h3 class="h2">☕${teamArray[i].getJob()}</h3>
                </div>
                <div class="card-body bg-light d-flex justify-content-center flex-column">
                    <p class="card h4 p-2 w-50 my-0">ID: ${teamArray[i].id}</p>
                    <p class="card h4 p-2 w-50 my-0">Email: ${teamArray[i].email}</p>
                    <p class="card h4 p-2 w-50 my-0">Office Number: ${teamArray[i].phone}</p>
                </div>
            </section>
            `;
        }
    };
    teamHtml += `
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
    return teamHtml;
}

module.exports = generateTemplate;