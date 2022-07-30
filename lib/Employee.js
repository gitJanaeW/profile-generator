class Employee {
    constructor(employeeName = 'Unidentified', id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
}

module.exports = Employee;