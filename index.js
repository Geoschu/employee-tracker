const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
require("dotenv").config();

// Create connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'employee_db',
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

// Function to view all departments
const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

// Function to view all roles
const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

// Function to view all employees
const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        startApp();
    });
};

// Function to add a department
const addDepartment = () => {
    inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'What is the name of the department?'
    }).then(answer => {
        connection.query('INSERT INTO department SET ?', { name: answer.departmentName }, (err, res) => {
            if (err) throw err;
            console.log(`Department added: ${answer.departmentName}`);
            startApp();
        });
    });
};

// Function to add a role
const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of the role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the role?'
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'What is the department ID for this role?'
        }
    ]).then(answer => {
        connection.query('INSERT INTO role SET ?', { title: answer.title, salary: answer.salary, department_id: answer.departmentId }, (err, res) => {
            if (err) throw err;
            console.log(`Role added: ${answer.title}`);
            startApp();
        });
    });
};

// Function to add an employee
const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the employee?'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the employee?'
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'What is the role ID for this employee?'
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'What is the manager ID for this employee?'
        }
    ]).then(answer => {
        connection.query('INSERT INTO employee SET ?', { first_name: answer.firstName, last_name: answer.lastName, role_id: answer.roleId, manager_id: answer.managerId }, (err, res) => {
            if (err) throw err;
            console.log(`Employee added: ${answer.firstName} ${answer.lastName}`);
            startApp();
        });
    });
};

// Function to update an employee role
const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'employeeId',
            type: 'input',
            message: 'What is the ID of the employee you want to update?'
        },
        {
            name: 'newRoleId',
            type: 'input',
            message: 'What is the new role ID for this employee?'
        }
    ]).then(answer => {
        connection.query('UPDATE employee SET ? WHERE ?', [{ role_id: answer.newRoleId }, { id: answer.employeeId }], (err, res) => {
            if (err) throw err;
            console.log(`Employee role updated successfully`);
            startApp();
        });
    });
};

// Start the application
startApp();
