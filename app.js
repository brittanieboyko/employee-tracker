const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Britt8Boyk!",
    database: "employeesDB"
});

connection.connect((err) => {
    if (err) throw err;
    init();
});

const addDepartmentPrompt = [{
    name: "department",
    type: "input",
    message: "Add a new department"
}];

const addRolePrompt = [{
    message: "What is the role you'd like to add?",
    type: "input",
    name: "role"
}, {
    message: "What is the salary of this role?",
    type: "input",
    name: "salary"
}];

const addEmployeePrompt = [{
    message: "What is the employee's first name?",
    type: "input",
    name: "firstName"
}, {
    message: "What is the employee's last name?",
    type: "input",
    name: "lastName"
}];

const updateEmployeePrompt = [{
    message: "What is the id of the employee you want like to update?",
    type: "input",
    name: "employeeId"
}, {
    message: "What is the new role id of the employee?",
    type: "input",
    name: "roleId"
}];

const init = () => {
    inquirer
        .prompt({
            name: "selection",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Exit"
            ]
        })
        .then((response) => {
            switch (response.selection) {
                case "View all Employees":
                    viewAll("employee");
                    break;

                case "View all Departments":
                    viewAll("department");
                    break;

                case "View all Roles":
                    viewAll("role");
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
}

const viewAll = (table) => {
    let query = "SELECT * from ??";
    connection.query(query, [table], function(err, res) {
        if (err) throw err;
        console.table(res);
        init();
    });
};

const addDepartment = () => {
    inquirer.prompt(addDepartmentPrompt)
        .then((response) => {
            connection.query("INSERT INTO department SET ?", {
                    name: response.department
                },

                function(err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " new department added!\n");
                    init();
                });

        });
}

const addRole = () => {
    inquirer.prompt(addRolePrompt)
        .then((response) => {
            connection.query("INSERT INTO role SET ?", {
                    title: response.role,
                    salary: response.salary
                },

                function(err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " new role added!\n");
                    init();
                });

        });
}

const addEmployee = () => {
    inquirer.prompt(addEmployeePrompt)
        .then((response) => {
            connection.query("INSERT INTO employee SET ?", {
                    first_name: response.firstName,
                    last_name: response.lastName
                },

                function(err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " new employee added!\n");
                    init();
                });

        });
}

const updateEmployee = () => {
    inquirer.prompt(updateEmployeePrompt)
        .then((response) => {
            connection.query("UPDATE employee SET role_id = ? WHERE id = ?",
                [response.roleId, response.employeeId],

                function(err, res) {
                    if (err) throw err;
                    init();
                });
        });
}