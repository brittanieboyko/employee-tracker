DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT NULL,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  PRIMARY KEY (id)
);
