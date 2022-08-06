const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeName, id, email, phone) {
        super(employeeName, id, email);
        this.phone = phone;
    }
    getJob(){
        return "Manager";
    }
}

module.exports = Manager;