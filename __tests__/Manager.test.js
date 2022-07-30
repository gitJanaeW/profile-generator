const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Michael');

    expect(manager.phone).toEqual(expect.any(Number));
});