const inquirer = require("inquirer");
const fs = require("fs");
const db = require("./utils/dataInputFunctions");

// Different variables cointaining all question sets 
const questions = [
    {
        type: "list", name: "selectAction", message: "What would you like to do?", choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ]
    }
];

const addNewDepartment = [
    { type: "input", name: "departmentName", message: "What is the name of the department?" },
];

const addNewRole = [
    { type: "input", name: "roleName", message: "What is the title for the role?" },
    {
        type: "input",
        name: "roleSalary",
        message: "Please enter the annual salary for the role"
    },
    {
        type: "list", name: "newRoleDepartment", message: "Which department does the role belong to?", choices: [
            "Department of Silly Walks",
            "Division of Nonsense",
            "Office of Random Generation",
            "Bureau of Pointless Meetings",
            "Ministry of Farcical Finance"
        ]
    }
];

const addNewEmployee = [
    { type: "input", name: "firstName", message: "What is the employee's first name?" },
    { type: "input", name: "lastName", message: "What is the employee's last name?" },
    {
        type: "list", name: "employeeRole", message: "What is this employes's role?", choices: [
            "Walkologist",
            "Giggle Guide",
            "Absurdity Engineer",
            "Quirk Quality Controller",
            "Content Chaos Coordinator",
            "Social Media Jester",
            "Time-Wasting Strategist",
            "Nonsensical Facilitator",
            "Chief Coin Toss Officer",
            "Comedy Currency Consultant"
        ]
    },
    {
        type: "list", name: "employeeManager", message: "Who is the employee's manager?", choices: [
            "Jasper McFizzles",
            "Tallulah Bumblebee",
            "Mortimer Cacklethorn",
            "Winifred Piddlewick",
            "Reginald Bumbershoot"
        ]
    }
];

const updateEmployeeRole = [
    {
        type: "input", name: "firstName", message: "First name of the employee's role you want to update?", choices: [
            "Jasper",
            "Penelope",
            "Dexter",
            "Tallulah",
            "Percy",
            "Gwendolyn",
            "Mortimer",
            "Prudence",
            "Bartholomew",
            "Winifred",
            "Horace",
            "Millicent",
            "Reginald",
            "Delilah",
            "Ignatius",
        ]
    },
    {
        type: "input", name: "lastName", message: "Last name of the employee's role you want to update?", choices: [
            "McFizzles",
            "Quibblesworth",
            "Wobblebottom",
            "Bumblebee",
            "McSnort",
            "Puddlefrost",
            "Cacklethorn",
            "Whifflebottom",
            "Flibbertigibbet",
            "Piddlewick",
            "Blunderbuss",
            "Snickerdoodle",
            "Bumbershoot",
            "Noodleman",
            "Flutterby"
        ]
    },
    {
        type: "list", name: "employeeRole", message: "Which new role do you want to assign the selected employee?", choices: [
            "Chief Walking Officer",
            "Walkologist",
            "Giggle Guide",
            "Chief Nonsense Officer",
            "Absurdity Engineer",
            "Quirk Quality Controller",
            "Chief Meme Officer",
            "Content Chaos Coordinator",
            "Social Media Jester",
            "Chief Procrastination Officer",
            "Time-Wasting Strategist",
            "Nonsensical Facilitator",
            "Director of Absurd Accounting",
            "Chief Coin Toss Officer",
            "Comedy Currency Consultant"
        ]
    },
];

function menu() {
    // run menu question with all possible choices
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        // Write switch case based on user anser to run sub function
        // Write different functions for each menu option of questions
        switch (response.selectAction) {
            case "View All Employees":
                db.viewEmployeesQuery().then(data => {
                    console.table(data[0])
                    menu();
                });
                break;
            case "Add Employee":
                inquirer.prompt(addNewEmployee).then((response) => {
                    db.findRoleByName(response.employeeRole).then(data => {
                        db.addEmployee(data[0][0].id, response.firstName, response.lastName).then(() => {
                            console.log("New employee added to database");
                            menu();
                        })
                    })
                })
                break;
            case "Update Employee Role":
                inquirer.prompt(updateEmployeeRole).then((response) => {
                    db.findRoleByName(response.employeeRole).then(data => {
                        db.updateEmployeeRole(data[0][0].id, response.firstName, response.lastName).then(() => {
                            console.log("Existing employee role updated in database");
                            menu();
                        })
                    })
                });
                break;
            case "View All Roles":
                db.viewAllRolesQuery().then(data => {
                    console.table(data[0])
                    menu();
                });
                break;
            case "Add Role":
                inquirer.prompt(addNewRole).then((response) => {
                    db.findDepartmentByName(response.newRoleDepartment).then(data => {
                    db.addRole(response.roleName, response.roleSalary, data[0][0].id).then(data => {
                        console.log("New role added to database")
                        menu();
                    });
                });
            });
                break;
            case "View All Departments":
                db.viewAllDepartmentsQuery().then(data => {
                    console.table(data[0])
                    menu();
                });
                break;
            case "Add Department":
                inquirer.prompt(addNewDepartment).then((response) => {
                    db.addDepartment(response).then(data => {
                        console.log("New department added to database");
                        menu();
                    });
                });
                break;
            case "Quit":
                menu();
            default:
                console.log("No selection was made")
        }
    })
}

// Function call to initialize app
menu();