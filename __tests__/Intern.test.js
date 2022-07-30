const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('Ryan', 489646766, 'ryanhoward@gmail.com', 'Kania School of Management');
    expect(intern.school).toEqual(expect.any(String));
});