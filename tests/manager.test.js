const Manager = require('../lib/Manager');

test('verifies creation of Manager object', () => {
    const manager = new Manager('Nick', 1, 'Nick.fierke453@gmail.com', 2);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('verifies the manager office number', () => {
    const manager = new Manager('Nick', 1, 'Nick.fierke453@gmail.com', 2);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});

test('verifies the role of employee', () => {
    const manager = new Manager('Nick', 1, 'Nick.fierke453@gmail.com', 2);

    expect(manager.getRole()).toEqual("Manager");
});