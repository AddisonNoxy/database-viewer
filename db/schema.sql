DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id int NOT NULL,
    name varchar(30) not null,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id int not null,
    title varchar(60) not null,
    salary decimal(6, 2) not null,
    department_id int,
    foreign key (department_id) references department(id) on delete set null,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id int not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    foreign key (role_id) references roles(id),
    foreign key (manager_id) references employee(id),
    PRIMARY KEY (id)
);