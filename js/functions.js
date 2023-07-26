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
        
    }

    addRole(name, salary, dept) {

    }

    addEmployee(fname, lname, role, manager) {

    }

    updateTable() {

    }
}

module.exports = {DatabaseAccess};