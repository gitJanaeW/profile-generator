const Employee = require('../lib/Employee');

test('create an Employee', () => {
    const employee = new Employee('Jim', 8921478933, 'jimhalp@gmail.com');
    expect(employee.employeeName).toBe('Jim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
});