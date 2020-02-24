  
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
    runSearch();
});

const runSearch = () => {
    console.log("hello");
}