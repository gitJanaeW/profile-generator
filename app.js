const fs = require('fs');
const path = require("path");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const teamArray = [];

const DIST_DIRECTORY = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIRECTORY, "team.html");
const sendToTemplate = require("./src/page-template");

getEmployeeType();

    function getEmployeeType(){
        inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: '\n============\nNEW EMPLOYEE\n============\nWhat type of employee you inputting?',
            choices: ['Engineer', 'Intern', 'Manager', "I dont want to add anymore team members"]
        
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter employee name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:'
        }
    ]).then((answers)=>{
        const empType = answers.employeeType

        switch(empType){
            case "Engineer":
                engineerQuestions(answers)
                break;
            case "Intern":
                 internQuestions(answers)
                break;
            case "Manager":
                 managerQuestions(answers)
                break;
                default:
                    buildTeam()
        }
    });
}

function buildTeam(){
    if(!fs.existsSync(DIST_DIRECTORY)){
        fs.mkdirSync(DIST_DIRECTORY)
    }
    fs.writeFileSync(distPath, sendToTemplate(teamArray), "utf-8");
}


        function engineerQuestions(answers){
            inquirer.prompt({
                type: 'input',
                name: 'github',
                message: 'Enter employee github name:'
            }).then((github)=>{
                const engineer = new Engineer(answers.employeeName, answers.email, answers.id, github.github)

                teamArray.push(engineer)
                console.log("teamArray with new engineer", teamArray)
                getEmployeeType();
            });
        }
            
function internQuestions(answers){ 
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'Enter employee school:'
    }).then((school) => {
        const intern = new Engineer(answers.employeeName, answers.email, answers.id, school.school)

        teamArray.push(intern)
        console.log("teamArray with new intern", teamArray)
        getEmployeeType();
    });
}
    
    function managerQuestions(answers){
        inquirer.prompt({
        type: 'input',
        name: 'phone',
        message: 'Enter employee phone number:'
    }).then((phone) => {
        const manager = new Engineer(answers.employeeName, answers.email, answers.id, phone.phone)

        teamArray.push(manager)
        console.log("teamArray with new manager", teamArray)
        getEmployeeType()
    });
    }

    module.exports = teamArray;