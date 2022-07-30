const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Michael', 8144798957028, 'michaelscott@gmail.com', 234-567-8912);
    expect(manager.phone).toEqual(expect.any(Number));
});