const express = require("express");
const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Josh123',
        database: 'company_db'
    },
    console.log(`connected to database`)
);

// const Connection = require("mysql2/typings/mysql/lib/Connection");
// const mysql = require('mysql2');



function questions() { 
    inquirer.prompt([
        {
            type: "list",
            name: "questions",
            message: "Choose one?",
            choices: ['View all employees', 'Add Employees', 'Update employees role','View all roles', 'Add Role', 'view all departments', 'Add departments' ],
    
        },
    ]).then(function(response) {
             switch(response.questions) {
          case 'View all employees':
              viewAllEmployees();
              break;
          case "Add Employees":
              addEmployees();
              break;
          case "Update Employees Role":
              updateRole();
              break;
          case "View All Roles":
              viewRoles();
              break;
          case "Add Roles":
              addRoles();
              break;
          case "View All Departments":
              viewDepartments();
              break;
          case "Add Departments":
              addDepartment();
              break;
          default:
              console.log("default");



       
             }   
    
    });

}
    questions();
function viewAllEmployees() {
    // console.log("hi its working")
    db.query(`
    SELECT DISTINCT employees.first_name, employees.last_name, roles.title, roles.salary, roles.department_id , department.department_name
    FROM roles
     JOIN employees
     JOIN department
    ON department.department_name = department_name
    ORDER BY department.id;`, function(err, results) {
        if(err) throw err;
        console.table(results);
        questions();
    });
}

              

function addEmployees() {
    inquirer.prompt([
        {
            type: "input",
            name: "newFirstName",
            message: "What is the employees first name"
        },

        {
            type: "input",
            name: "newLastName",
            message: "What is there last name"
        },


        {
            type: "input",
            name: "newID",
            message: "Enter there new manager ID"

        }


    ]).then(function(results) {
        db.query(
            `INSERT INTO employees SET ?`,
            {
                first_name: results.newFirstName,
                last_name: results.newLastName,
                manager_id: results.newID
                
            }
           
        )
        
        questions();
      
    });
   
}

// function updateRole() {
//     inquirer.prompt([
//         {
//             type: "list",
//             name: "chooseName",
//             message: "Chose which employees role you want to update",
//             choices: ['Josh Tyler', 'Bob Builder', 'John Wick', 'Huncho Jack', 'Luke Skywalker'],
//         },

//         {
//             type: "list", 
//             name: "chooseRole", 
//             message: "Select their new role",
//             choices: []
//         }

//     ])
//     questions();
// }

function addRoles() {
    inquirer.prompt([
        {
            type: "input",
            name: "newRole",
            message: "What is the name of the new role?",

        },

        {
            type: "input",
            name: "salary",
            message: "What is the salary?",
        },

        {
            type: "input",
            name: "newDID",
            message: "What is the new Department ID?"
        }


    ]).then(function (answers) {
        db.query(
            `INSERT INTO roles SET ?`,
            {
                department_id: answers.newID,
                title: answers.newRole,
                salary: answers.salary
            }

        )
        questions();
    });
    
}

function viewDepartments() {
    db.query(`SELECT * FROM departments`, function(err, results) {
        if(err) throw err;
        console.table(results);
        questions();
    });
}





 
// db.query('SELECT * FROM students', function (err, results) {
//     console.log(results);
//   });

// };

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});