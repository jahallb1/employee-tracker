DROP DATABASE IF EXIST employee_db;
CREATE DATABASE employee_db;

CREATE TABLE department (
    id INTEGER UNSIGNED AUTO_INCREMENET PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
     id INTEGER UNSIGNED AUTO_INCREMENET PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
     id INTEGER UNSIGNED AUTO_INCREMENET PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);