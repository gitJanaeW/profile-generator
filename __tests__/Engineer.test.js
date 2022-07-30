const Engineer = require('../lib/Engineer');

test('create an Engineeer', () => {
    const engineer = new Engineer('Pam', 38265098, 'pamhalp@gmail.com', 'pamhalp');
    expect(engineer.github).toEqual(expect.any(String));
});