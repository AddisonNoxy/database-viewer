const inquirer = require('inquirer');
const mysql = require('mysql2');

const {DatabaseAccess} = require('./js/functions.js');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company_db',
    password: 'Konkonkitsune11!'
})

const newAccess = new DatabaseAccess();

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
        var queryName = "";

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
            case '7':
                queryType = "update";
            default:
                console.log("Invalid query.");
        }

        if (queryType == "view") { //if the query is for viewing a table, show the correct table
            connection.query(newAccess.viewTable(choice[0]), (err, res) => {
                if (err) {
                    console.log(err)
                }
                console.table(res);
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
                
            });
        } else if (queryType == "add") {
            
        } else if (queryType == "update") {

        } else {

        }
    })
}

startInput();