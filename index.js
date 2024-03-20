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
const startApp = async () => {
    try {
        const { action } = await inquirer.prompt({
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
        });

        switch (action) {
            case 'View all departments':
                await viewAllDepartments();
                break;
            case 'View all roles':
                await viewAllRoles();
                break;
            case 'View all employees':
                await viewAllEmployees();
                break;
            case 'Add a department':
                await addDepartment();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'Add an employee':
                await addEmployee();
                break;
            case 'Update an employee role':
                await updateEmployeeRole();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    } catch (error) {
        console.error(error);
    }
};

// Function to view all departments
const viewAllDepartments = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM department');
        console.table(rows);
        await startApp();
    } catch (error) {
        console.error(error);
    }
};

// Function to view all roles
const viewAllRoles = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM role');
        console.table(rows);
        await startApp();
    } catch (error) {
        console.error(error);
    }
};

// Function to view all employees
const viewAllEmployees = async () => {
    try {
        const [rows] = await connection.query('SELECT * FROM employee');
        console.table(rows);
        await startApp();
    } catch (error) {
        console.error(error);
    }
};

// Function to add a role
const addRole = async () => {
    try {
        const { title, salary, departmentId } = await inquirer.prompt([
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
        ]);
        await connection.query('INSERT INTO role SET ?', { title, salary, department_id: departmentId });
        console.log(`Role added: ${title}`);
        await startApp();
    } catch (error) {
        console.error(error);
    }
};

// Function to add an employee
const addEmployee = async () => {
    try {
        const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
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
        ]);
        await connection.query('INSERT INTO employee SET ?', { first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId });
        console.log(`Employee added: ${firstName} ${lastName}`);
        await startApp();
    } catch (error) {
        console.error(error);
    }
};