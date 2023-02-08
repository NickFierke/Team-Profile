const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let engineer;

    beforeEach(() => {
        engineer = new Engineer('Nick', 1, 'Nick.fierke453@gmail.com', 'nick453');
    });

    test('creates an Engineer object with github property', () => {
        expect(engineer.github).toEqual(expect.any(String));
    });

    test('gets engineer github value using getGithub()', () => {
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    test('gets role of employee using getRole()', () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });
});
