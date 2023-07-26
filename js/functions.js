class DatabaseAccess {
    constructor() {
        this.query = ``;
    }

    viewTable(table) {
        var result;
        switch (table) {
            case "1":
                result = "DEPARTMENT";
                break;
            case "2":
                result = "ROLES";
                break;
            case "3":
                result = "EMPLOYEE";
                break;
        }
        this.query = `SELECT * FROM ${result}`;
        return this.query;
    }

    addDepartment(name) {
        this.query = `INSERT INTO DEPARTMENT (name) VALUES ("${name}")`;
        return this.query;
    }

    addRole(title, salary, dept) {
        this.query = `INSERT INTO ROLES (title, salary, department_id) VALUES ("${title}", ${salary}, ${dept})`;
        return this.query;
    }

    addEmployee(fname, lname, role, manager) {
        this.query = `INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id) VALUES ("${fname}", "${lname}", ${role}, ${manager})`;
        return this.query;
    }

    updateTable(employee, role) {
        this.query = `UPDATE EMPLOYEE SET role_id = ${role} WHERE id = ${employee}`;
        return this.query;
    }
}

module.exports = {DatabaseAccess};