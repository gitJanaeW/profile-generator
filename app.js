const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const teamArray = [];

const DIST_DIRECTORY = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIRECTORY, "team.html");
const sendTemplate = require("./src/page-template");

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
    if(employeeType.employeeType === "I dont want to add anymore team members"){
        return buildTeam(teamArray);
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
    inquirer.prompt({
        type: 'input',
        name: 'github',
        message: 'Enter employee github name:'
    }).then((github)=>{
        const engineer = new Engineer(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, github.github)
        teamArray.push(engineer);
        console.log("teamArray ENGINQUESTIONS: ", teamArray);
        getEmployeeType();
    });
}
            
function internQuestions(generalQuestions, employeeType){ 
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'Enter employee school:'
    }).then((school) => {
        const intern = new Intern(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, school.school);
        teamArray.push(intern);
        getEmployeeType();
    });
}
    
function managerQuestions(generalQuestions, employeeType){
    inquirer.prompt({
    type: 'input',
    name: 'phone',
    message: 'Enter employee phone number:'
    }).then((phone) => {
        const manager = new Manager(generalQuestions.employeeName, generalQuestions.email, generalQuestions.id, phone.phone);
        teamArray.push(manager);
        getEmployeeType();
    });
}

const getSpecifiedQuestion = (generalQuestions, employeeType) => {
    switch (employeeType.employeeType) {
        case "Engineer":
            engineerQuestions(generalQuestions, employeeType);
            break;
        case "Intern":
            internQuestions(generalQuestions, employeeType);
            break;
        case "Manager":
            managerQuestions(generalQuestions, employeeType);
            break;
    }
}

const buildTeam = async (teamArray) => {
    if(!fs.existsSync(DIST_DIRECTORY)){
        fs.mkdirSync(DIST_DIRECTORY);
    }
    const html = await sendTemplate(teamArray);
    console.log(teamArray);
    console.log("111", html);
    fs.writeFileSync(distPath, html, "utf-8");
}

module.exports = teamArray;