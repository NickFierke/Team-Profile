
const inquirer = require('inquirer');
const fs = require('fs');


let employees = [];


const collectEmployeeInfo = async () => {
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email address?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the employee\'s role?',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }
    ]);

    employees.push(employee);
};


const collectAllEmployees = async () => {
    let moreEmployees = true;

    while (moreEmployees) {
        await collectEmployeeInfo();

        const answer = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'addMore',
                message: 'Do you want to add more employees?'
            }
        ]);

        moreEmployees = answer.addMore;
    }
};

collectAllEmployees()