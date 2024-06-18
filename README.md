# employee-tracker

A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Motivation

This project was built to provide a simple and efficient way to manage employee data. It allows users to view, add, remove, and update employee information directly from the command line.

## Why this was built

Managing employee data can be a complex task, especially for large organizations. This application was built to simplify that process and make it more efficient.

## What it solved

This application solves the problem of having to manually manage employee data. It provides a user-friendly interface that allows users to easily manage their employee database.

## What I learned

Through this project, I learned how to build a command-line application using Node.js, Inquirer, and MySQL. I also learned how to interact with a MySQL database using Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

To install the application, follow these steps:

1. Open your terminal.
2. Connect to your MySQL server with the following command. Replace 'root' and 'mysql' with your MySQL username and password, respectively:

`mysql -u 'root' -p'mysql'`

3. Once you're connected, load the schema by running the following command. Replace path/to/schema.sql with the actual path to your schema.sql file:

`source /db/schema.sql`

4. Load the seed data by running the following command. Replace path/to/seeds.sql with the actual path to your seeds.sql file:

`source /db/seeds.sql`

5. Exit the MySQL command line with the following command:

exit

1. Clone the repository to your local machine.
2. Navigate to the root directory in your terminal.
3. Run `npm install` to install the necessary dependencies.

## Usage

To use the application,

run `node index.js` in your terminal and follow the prompts.

![alt text](assets/images/screenshot_website.png)

## Credits

I collaborated with Keegan Royal-Eisenberg on this project.

Tutorials and resources used:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [MySQL](https://www.mysql.com/)
- [Phind](https://www.phind.com/)
- [Xpert Learning Assistant](https://bootcampspot.instructure.com/courses/4767/external_tools/313)
