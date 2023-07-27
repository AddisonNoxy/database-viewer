const inquirer = require('inquirer');
const mysql = require('mysql2');

const {DatabaseAccess} = require('./js/functions.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company_db',
    password: ''
})

const newAccess = new DatabaseAccess(); //import database access class and functions

function startInput() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'initialquery',
            choices: ['1. View all departments', '2. View all roles', '3. View all employees', '4. Add a department', '5. Add a role', '6. Add an employee', '7. Update an employee role']
        }
    ]).then((res) => {
        // connection.query(`SELECT * FROM department`, (err, res) => {

        //     if (err) {
        //         console.log(err);
        //     }
        //     //if there is no error, show the input and check if there are further requests
        //     console.table(res);
        //     inquirer.prompt([
        //         {
        //             type: 'list',
        //             message: 'Do you have another query?',
        //             name: 'recursive',
        //             choices: ['Yes', 'No']
        //         }
        //     ]).then((res) => {
        //         if (res.recursive == 'Yes') {
        //             startInput();
        //         }
        //     })
    
        // });

        var queryType = "";

        var choice = res.initialquery.split('.');

        switch (choice[0]) { //inform which choice was made from inquirer
            case '1':
            case '2':
            case '3':
                queryType = "view";
                break;
            case '4':
            case '5':
            case '6':
                queryType = "add";
                break;
            case '7':
                queryType = "update";
                break;
            default:
                console.log("Invalid query.");
        }

        if (queryType == "view") { //if the query is for viewing a table, show the correct table
            connection.query(newAccess.viewTable(choice[0]), (err, res) => {
                if (err) {
                    console.log(err)
                }
                console.table(res);
                recursiveQuery();
                
            });
        } else if (queryType == "add") { //if the query is adding to a table, show correct prompts based on which table
            if (choice[0] == '4') { //adding a new department

                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is the new department name?",
                        name: "department"
                    }
                ]).then((res) => {
                    connection.query(newAccess.addDepartment(res.department), (err, res) => {
                        if (err) {
                            console.log(err)
                        }
                        console.log("Role added!");
                        recursiveQuery();
                    })
                })

            } else if (choice[0] == '5') { //adding a new role
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is the new role name?",
                        name: "role"
                    },
                    {
                        type: 'input',
                        message: "What is the new role's salary?",
                        name: "salary"
                    },
                    {
                        type: 'input',
                        message: "Which department is the new role under?",
                        name: "department"
                    }
                ]).then((res) => {
                    connection.query(newAccess.addRole(res.role, res.salary, res.department), (err, res) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Role added!");
                        recursiveQuery();
                    })
                })
            } else { //adding a new employee
                inquirer.prompt([
                    {
                        type: 'input',
                        message: "What is the employee's first name?",
                        name: "firstname"
                    },
                    {
                        type: 'input',
                        message: "What is the employee's last name?",
                        name: "lastname"
                    },
                    {
                        type: 'input',
                        message: "What is the role ID for the new employee?",
                        name: "role"
                    },
                    {
                        type: 'input',
                        message: "What is the new employee's manager ID?",
                        name: "manager"
                    }
                ]).then((res) => {
                    connection.query(newAccess.addEmployee(res.firstname, res.lastname, res.role, res.manager), (err, res) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Employee added!");
                        recursiveQuery();
                    })
                })
            }
        } else if (queryType == "update") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is the employee's ID?",
                    name: 'employee'
                },
                {
                    type: 'input',
                    message: "What is the employee's new role?",
                    name: 'role'
                }
            ]).then((res) => {
                connection.query(newAccess.updateTable(res.employee, res.role), (err, res) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Employee updated!");
                    recursiveQuery();
                })
            })
        } else {

        }
    })
}

function recursiveQuery() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Do you have another query?',
            name: 'recursive',
            choices: ['Yes', 'No']
        }
    ]).then((res) => {
        if (res.recursive == 'Yes') {
            startInput();
        }
    });
}

startInput();