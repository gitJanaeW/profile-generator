const inquirer = require('inquirer');

class Prompts {

    getEmployeeType(){
        inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: '\n============\nNEW EMPLOYEE\n============\nWhat type of employee you inputting?',
            choices: ['Engineer', 'Intern', 'Manager']
        
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
    ]).then(type => this.getEmployeeInfo(type));
    }
    getEmployeeInfo(type){
        if(type.employeeType === "Engineer"){
            inquirer.prompt({
                type: 'input',
                name: 'github',
                message: 'Enter employee github name:'
            }).then(github => {const results = {type, github}});
        } else if(type.employeeType === "Intern"){
            inquirer.prompt({
                type: 'input',
                name: 'school',
                message: 'Enter employee school:'
            }).then(school => {const results = {type, school}});
        } else {
            inquirer.prompt({
                type: 'input',
                name: 'phone',
                message: 'Enter employee phone number:'
            }).then(phone => {const results = {type, phone}});
        }
    } 
}

module.exports = Prompts;