const generateTeam = teamArray => { 
}

module.exports = teamArray => {
    console.log(teamArray[0].getName());
    return `
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
    <main class="d-flex justify-content-around flex-wrap">
        
    <section class="mx-2 p-4 card col-3 my-4 ">
            <div class="card-header bg-info text-dark p-3">
                <h2 class="h1">Pam</h2>
                <h3 class="h2">Intern</h3>
            </div>
            <div class="card-body bg-light d-flex justify-content-center flex-column">
                <p class="card h4 p-2 w-100 my-0">ID: 1</p>
                <p class="card h4 p-2 w-100 my-0">Email: 2</p>
                <p class="card h4 p-2 w-100 my-0">Office Number: 123-456-7890</p>
            </div>
    </section>

    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};