const Intern = require('../lib/Intern');

describe('Intern', () => {
    let intern;

    beforeEach(() => {
        intern = new Intern('Nick', 1, 'Nick.fierke453@gmail.com', 'MIT');
    });

    test('creates an Intern object with school property', () => {
        expect(intern.school).toEqual(expect.any(String));
    });

    test('gets employee school using getSchool()', () => {
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });

    test('gets role of employee using getRole()', () => {
        expect(intern.getRole()).toEqual("Intern");
    });
});
