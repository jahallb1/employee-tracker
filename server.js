const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;

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
//     afterConnection();
  });

  // view all departments

  async function viewAllDepartment() {
      const sql = `SELECT * FROM department`;
      const parms = [];
      connection.promise().query(sql, parmas, (err, rows) => {
          if (err) {
              return { error: err.message }; 
          }
          return rows;
      })
  };

  async function viewAllRole() {
    const sql = `SELECT * FROM role`;
    const parms = [];
    connection.promise().query(sql, parmas, (err, rows) => {
        if (err) {
            return { error: err.message };
        }
        return rows;
      }); 
};

async function viewAllEmployees() {
    const sql = `SELECT * FROM employee INNER JOIN  employee_db.role ON employee.role_id = role.id`;
    const parms = [];
    connection.promise().query(sql, parmas, (err, rows) => {
        if (err) {
            return{ error: err.message };
        }
        return rows;
      });    
};




  