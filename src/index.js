// node packages
const inquirer = require('inquirer');
const jest = require('jest');
const HTML = require('../dist/page-template');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

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
              type: "",
              name: "",
              message: "",
              choices: []
            })
            .then(({ employeeType }) => {
              if (employeeType === 'Manager') {
                inquirer.prompt([
                  {
                    type: 'input',
                    name: '',
                    message: "",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("");
                        return false;
                      }
                    }
                  },
                  {
                    type: "",
                    name: "",
                    message: "",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("");
                        return false;
                      }
                    }
                  },
                  {
                    type: "",
                    name: "",
                    message: "",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("");
                        return false;
                      }
                    }
                  },
                  {
                    type: "",
                    name: "",
                    message: "",
                    validate: officeNumberInput => {
                      if (officeNumberInput) {
                        return true;
                      } else {
                        console.log("");
                        return false;
                      }
                    }
                  },
                ])
      
                  .then((templateData) => {
                    const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                    this.teamArray.push(newManager);
                    this.questions();
                  });
      
              } else if (employeeType === 'Engineer') {
                inquirer.prompt([
                  {
                    type: "",
                    name: "",
                    message: "",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'number',
                    name: 'id',
                    message: "Please enter the engineer's employee id",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("Please enter a correct answer, the employee id should be a number!");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the engineer's email",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("Please enter the correct engineer's email!");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the engineer's github username",
                    validate: githubInput => {
                      if (githubInput) {
                        return true;
                      } else {
                        console.log("Please enter the correct engineer's github username!");
                        return false;
                      }
                    }
                  }
      
                ]).then(templateData => {
                  const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                  this.teamArray.push(newEngineer);
                  this.questions();
                });
      
              } else if (employeeType === 'Intern') {
                inquirer.prompt([
                  {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the intern's name",
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log("Please enter the intern's name!");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'number',
                    name: 'id',
                    message: "Please enter the intern's employee id",
                    validate: idInput => {
                      if (idInput) {
                        return true;
                      } else {
                        console.log("Please enter a correct answer, the employee id should be a number!");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the intern's email",
                    validate: emailInput => {
                      if (emailInput) {
                        return true;
                      } else {
                        console.log("Please enter the correct intern's email!");
                        return false;
                      }
                    }
                  },
                  {
                    type: 'input',
                    name: 'school',
                    message: "Please enter the intern's school name",
                    validate: schoolInput => {
                      if (schoolInput) {
                        return true;
                      } else {
                        console.log("Please enter the correct intern school's name!");
                        return false;
                      }
                    }
                  }
      
                ]).then(templateData => {
                  const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                  this.teamArray.push(newIntern);
                  this.questions();
                });
      
              } else if (employeeType === 'I finished entering my team info') {
                const pagehtml = generateHTML(this.getTeamArray());
                fs.writeFile('./dist/index.html', pagehtml, err => {
                  if (err) throw new Error(err);
      
                  console.log('Page created! Check out index.html in the dist/ folder to see it!');
                });
              }
            });
    }
}
// employee = (name, id, email) => {

//     name

//     id

//     email

//     getName()

//     getId()

//     getEmail()

//     getRole()

//     return employee

// }

// engineer = (name, id, email, github) => {

//     github

//     getGithub()
    
//     return engineer

// }

// intern = (name, id, email, school) => {

//     school

//     getSchool()
    
//     return intern

// }

// manager = (name, id, email, officeNumber) => {

//     officeNumber

//     return manager

// }

module.exports = index;



