// node packages
const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

class Prompt {

    constructor() {
        this.teamArray = [];
    }

    getArray() {
        return this.teamArray;
    }

    questions() {

        inquirer.prompt(
            {
              type: "list",
              name: "role",
              message: "What is the current role you would like to create?",
              choices: ["Manager", "Engineer", "Intern", "Already finished input"]
            })

            .then(({ role }) => {
              if (role === "Manager") {

                inquirer.prompt([
                  {
                    type: "input",
                    name: "name",
                    message: "Enter manager name",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("Enter the name...");
                        return false;
                      }
                    }
                  },
                  {
                    type: "number",
                    name: "id",
                    message: "Enter manager ID number",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("Enter the correct ID");
                        return false;
                      }
                    }
                  },
                  {
                    type: "input",
                    name: "email",
                    message: "Enter your email",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("Enter the correct email");
                        return false;
                      }
                    }
                  },
                  {
                    type: "number",
                    name: "phoneNumber",
                    message: "Enter office Number",
                    validate: phoneNumberInput => {
                      if (phoneNumberInput) {
                        return true;
                      } else {
                        console.log("Enter a valid office number");
                        return false;
                      }
                    }
                  },
                ])
      
                  .then((templateData) => {
                    const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.phoneNumber)
                    this.teamArray.push(newManager);
                    this.questions();
                  });
      
              } else if (role === "Engineer") {
                inquirer.prompt([
                  {
                    type: "input",
                    name: "name",
                    message: "Enter engineers name",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("Enter engineers name...");
                        return false;
                      }
                    }
                  },
                  {
                    type: "number",
                    name: "id",
                    message: "Enter engineers ID number",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("Enter valid ID number");
                        return false;
                      }
                    }
                  },
                  {
                    type: "input",
                    name: "email",
                    message: "Enter valid email",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("Enter valid email...");
                        return false;
                      }
                    }
                  },
                  {
                    type: "input",
                    name: "github",
                    message: "Enter github username",
                    validate: githubInput => {
                      if (githubInput) {
                        return true;
                      } else {
                        console.log("Enter valid github username");
                        return false;
                      }
                    }
                  }
      
                ]).then(templateData => {
                  const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                  this.teamArray.push(newEngineer);
                  this.questions();
                });
      
              } else if (role === "Intern") {
                inquirer.prompt([
                  {
                    type: "input",
                    name: "name",
                    message: "Enter intern's name",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("Enter name...");
                        return false;
                      }
                    }
                  },
                  {
                    type: "number",
                    name: "id",
                    message: "Enter intern ID number",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("Enter valid ID number");
                        return false;
                      }
                    }
                  },
                  {
                    type: "input",
                    name: "email",
                    message: "Enter email",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("Enter valid email...");
                        return false;
                      }
                    }
                  },
                  {
                    type: "input",
                    name: "school",
                    message: "Enter school attended by intern",
                    validate: schoolInput => {
                      if (schoolInput) {
                        return true;
                      } else {
                        console.log("Enter valid school");
                        return false;
                      }
                    }
                  }
      
                ]).then(templateData => {
                  const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                  this.teamArray.push(newIntern);
                  this.questions();
                });
      
              } else if (role === "Already finished input") {
                const pagehtml = generateHTML(this.getTeamArray());
                fs.writeFile("../index.html", pagehtml, err => {
                  if (err) throw new Error(err);
      
                  console.log("Checkout out the html");
                });
              }
            });
    }
}

module.exports = index;



