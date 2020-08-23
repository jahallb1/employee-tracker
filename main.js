const inquirer = require("inquirer");
const sqlStatements = require('./database')

    inquirer
    .prompt ({
    type: 'list',
    name: 'name',
    message: 'What would you like todo? (Required)',
    choices: ['View all departments', 
    'View all roles', 
    'View all employees', 
    'Add a department', 
    'Add a role', 
    'Add an employee', 
    'Update an employee', 
    'Stop Challenge'],
    validate: async nameInput => {
        if (nameInput) {
            const rows = await sqlStatements.insertEmployee('Matt', 'Damon', 1, null);
            console.log(rows)
            return true;
        } else {
            console.log('Please choose what you want todo!');
            return false;
        }
    }
})



