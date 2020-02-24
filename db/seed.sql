USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary)
VALUES ("Sales Lead", 100000), ("Sales Person",85000), ("Engineer",110000), ("Accountant",120000), ("Legal Team Lead",125000), ("Lawyer",115000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Brittanie", "Boyko", 3);