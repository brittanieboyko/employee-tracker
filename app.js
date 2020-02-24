const mysql = require("mysql");
const inquirer = require("inquirer");

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
                "Nothing"
            ]
        })
        .then(function (response) {
            switch (response.selection) {
                case "View all Employees":
                    console.log("view employees")
                    break;

                case "View all Departments":
                    console.log("view departments")
                    break;

                case "View all Roles":
                    console.log("view roles")
                    break;

                case "Add Employee":
                    console.log("add employee")
                    break;

                case "Add Department":
                    console.log("add department")
                    break;

                case "Add Role":
                    console.log("add role")
                    break;

                case "Update Employee Role":
                    console.log("update role")
                    break;
                case "Nothing":
                    connection.end();
                    break;
            }
        });
}