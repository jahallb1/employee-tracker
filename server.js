

const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

//const db = require('./db/database');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Oboe13579',
    //database: 'employee_DB'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
//     afterConnection();
  });