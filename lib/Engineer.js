const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email, getName, getId, getEmail);
        this.github = github;
    }
}

module.exports = Engineer;