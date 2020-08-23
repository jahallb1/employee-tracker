const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const { async } = require('rxjs');


const PORT = process.env.PORT || 3001;

//const db = require('./db/database');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Oboe13579',
    database: 'employee_DB',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  // view all departments
const promisePool = pool.promise();

module.exports = {
  viewAllDepartments: async function() {
      const sql = `SELECT * FROM department`;
      try {
      const [rows] = await promisePool.query(sql);
    
      return rows
      } catch (err) {
        throw err
      }
  },
  selectOneEmployeeById: async function(id) {
    const sql = `SELECT * FROM employee where id = ?`;
    const params = [id]
    try {
    const [rows] = await promisePool.query(sql, params);
    return rows
    } catch (err) {
      throw err
    }

},
insertEmployee: async function(first_name, last_name, role_id, manager_id) {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  const params = [first_name, last_name, role_id, manager_id]
  try {
  const [rows] = await promisePool.query(sql, params);
  return rows
  } catch (err) {
    throw err
  }

}
}

  async function viewAllRole() {
    const sql = `SELECT * FROM role`;
    const params = [];
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


