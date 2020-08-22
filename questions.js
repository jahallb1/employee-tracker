const inquirer = require("inquirer");

const questions = [ {
    type: 'choices',
    name: 'name',
    message: 'What would you like todo? (Required)',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please choose what you want todo!');
            return false;
        }
    }
},
]
