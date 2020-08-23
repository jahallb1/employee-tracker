const inquirer = require("inquirer");
const sqlStatements = require('./database');
const { viewAllDepartments, viewAllRole, viewAllEmployees } = require("./database");

    inquirer
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
    }).then((answers) => {
if (answers === "View all departments") {
    viewAllDepartments();
} if (answers === "View all roles") {
    viewAllRole();
} if (answers === "View all employees") {
    viewAllEmployees();
} if (answers === "Add a department") {
    addDepartment();
} if (answers === "Add a role") {
    addRole()
} if (answers === "Add an employee") {
    addEmployee();
} if (answers === "Update an employee") {
    updatedEmployee();
} else {
    console.log("Goodbye")
}
})


 
