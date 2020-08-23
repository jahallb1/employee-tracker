const inquirer = require("inquirer");
const sqlStatements = require('./database');
const { viewAllDepartments, viewAllRole, viewAllEmployees } = require("./database");
const { async } = require("rxjs");


    async function mainMenu() { inquirer
    .prompt ({
    type: 'list',
    name: 'question',
    message: 'What would you like todo? (Required)',
    choices: ['View all departments', 
    'View all roles', 
    'View all employees', 
    'Add a department', 
    'Add a role', 
    'Add an employee', 
    'Update an employee', 
    'Stop Challenge']
    }).then(async({question}) => {
if (question === "View all departments") {
    await viewAllDepartments();
} else if (question === "View all roles") {
    await viewAllRole();
} else if (question === "View all employees") {
    await viewAllEmployees();
} else if (question === "Add a department") {
    await addDepartment();
} else if (question === "Add a role") {
    await addRole()
} else if (question === "Add an employee") {
    await addEmployee();
} else if (question === "Update an employee") {
    await updatedEmployee();
} else {
    console.log("Goodbye")
}
mainMenu();
});


    }
    mainMenu();
 
