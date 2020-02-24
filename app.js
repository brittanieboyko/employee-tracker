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
                    console.log("add employee")
                    break;

                case "Add Department":
                    addDepartment();
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