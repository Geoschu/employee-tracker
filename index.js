const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
require("dotenv").config();

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user = process.env.DB_USER;
  password = process.env.DB_PASSWORD;
  database: 'employee_db'
});

// Function to start the application
const startApp = () => {
  inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
      ]
  }).then(answer => {
      switch (answer.action) {
          case 'View all departments':
              viewAllDepartments();
              break;
          case 'View all roles':
              viewAllRoles();
              break;
          case 'View all employees':
              viewAllEmployees();
              break;
          case 'Add a department':
              addDepartment();
              break;
          case 'Add a role':
              addRole();
              break;
          case 'Add an employee':
              addEmployee();
              break;
          case 'Update an employee role':
              updateEmployeeRole();
              break;
          case 'Exit':
              connection.end();
              break;
      }
  });
};