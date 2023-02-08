const Employee = require('../lib/employee');

describe('Employee', () => {
    let employee;

    beforeEach(() => {
        employee = new Employee('Nick', 1, 'Nick.fierke453@gmail.com');
    });

    test('creates an employee object with name, id, and email properties', () => {
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });

    test('gets employee name using getName()', () => {
        expect(employee.getName()).toEqual(expect.any(String));
    });

    test('gets employee ID using getId()', () => {
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    test('gets employee email using getEmail()', () => {
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

    test('gets role of employee using getRole()', () => {
        expect(employee.getRole()).toEqual("Employee");
    });
});
