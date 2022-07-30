const Employee = require('../lib/Employee');

jest.mock('../lib/__mocks__/Employee');

test('create an Employee', () => {
    const employee = new Employee('Jim');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect.stringContaining('@'));
});