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
    inquirer.prompt(
    {
        type: 'list',
        name: 'employeeType',
        message: '\n============\nNEW EMPLOYEE\n============\nWhat type of employee you inputting?',
        choices: ['Engineer', 'Intern', 'Manager', "I dont want to add anymore team members"]
    }).then((employeeType) => checkNoMoreQuestions(employeeType));
}

const checkNoMoreQuestions = (employeeType) => {
    if(employeeType === "I dont want to add anymore team members"){
        return buildTeam();
    }
    return generalEmployeeQuestions(employeeType);
}

const generalEmployeeQuestions = (employeeType) => {
    inquirer.prompt([
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
    ])
    .then((generalQuestions) => {getSpecifiedQuestion(generalQuestions, employeeType)}); 
}


function engineerQuestions(generalQuestions, employeeType){
    console.log("IN ENGINEER QUESTIONS");
    inquirer.prompt({
        type: 'input',
        name: 'github',
        message: 'Enter employee github name:'
    }).then((github)=>{
        const engineer = new Engineer(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, github.github)

        teamArray.push(engineer);
        console.log("teamArray with new engineer", teamArray);
        getEmployeeType();
    });
}
            
function internQuestions(generalQuestions, employeeType){ 
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'Enter employee school:'
    }).then((school) => {
        const intern = new Intern(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, school.school)

        teamArray.push(intern);
        console.log("teamArray with new intern", teamArray);
        getEmployeeType();
    });
}
    
function managerQuestions(generalQuestions, employeeType){
    inquirer.prompt({
    type: 'input',
    name: 'phone',
    message: 'Enter employee phone number:'
    }).then((phone) => {
        const manager = new Manager(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, phone.phone)

        teamArray.push(manager);
        console.log("teamArray with new manager", teamArray);
        getEmployeeType()
    });
}

const getSpecifiedQuestion = (generalQuestions, employeeType) => {
    console.log("EmployeeType: ", employeeType, "\nGeneralQuestions: ", generalQuestions);
    switch (employeeType) {
        case "Engineer":
            console.log("EmployeeType: ", employeeType, "\nGeneralQuestions: ", generalQuestions);
            console.log('broken or nah?');
            engineerQuestions(generalQuestions, employeeType);
            break;
        case "Intern":
            console.log("EmployeeType: ", employeeType);
            internQuestions(generalQuestions, employeeType);
            break;
        case "Manager":
            console.log("EmployeeType: ", employeeType);
            managerQuestions(generalQuestions, employeeType);
            break;
        default:
            console.log("EmployeeType: ", employeeType);
            buildTeam();
            break;
    }
}

function buildTeam(){
    if(!fs.existsSync(DIST_DIRECTORY)){
        fs.mkdirSync(DIST_DIRECTORY)
    }
    fs.writeFileSync(distPath, sendToTemplate(teamArray), "utf-8");
}

module.exports = teamArray;