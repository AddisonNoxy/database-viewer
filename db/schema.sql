DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department {
    id int PRIMARY KEY,
    name varchar(30) not null
}

CREATE TABLE role {
    id int PRIMARY KEY,
    title varchar(30) not null,
    salary decimal not null,
    foreign key department_id references department(id) on delete set null
}

CREATE TABLE employee {
    id int PRIMARY KEY,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    foreign key role_id references role(id) on delete set null,
    foreign key manager_id references employee(id) on delete set null
}