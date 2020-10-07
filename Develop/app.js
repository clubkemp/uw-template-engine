//require in the constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//require in utilities
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//require in question list for prompts
const questions = require("./lib/questions.js")
//setup your directory paths
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//require in the html renderer
const render = require("./lib/htmlRenderer");


//function to initiat the whole process running
const init = () =>{
    //create an empty array our obj classes will be loaded into
    const employeeArray = [];
    //need to wrap the user prompt section in a function so we can make it recursive
    const userInput = () =>{
        //using inquirer
        inquirer
        //prompt the user with a series of questions saved in questions.js
        .prompt(questions)
        //then do work on the answers
        .then(answers =>{
            //spread the answers props for easier access
            const {add, name, role, id, email, officeNumber, github, school } = answers
            //check to make sure the user had selected to add another user, if false we want to skip all this work and just fire renderer
            if(add){
                //switch statement to build each employee based on their role property
                switch(role){
                    //if manger
                    case "Manager":
                        const manager = new Manager(name, id, email, officeNumber)
                        console.log(manager);
                        employeeArray.push(manager)
                        break;
                    //if engineer
                    case "Engineer":
                        const engineer = new Engineer(name, id, email, github)
                        employeeArray.push(engineer)
                        break;
                    //if intern
                    case "Intern":
                        const intern = new Intern(name, id, email, school)
                        employeeArray.push(intern)
                        break;
                }
                //since the user just got done adding a user, start the pattern over
                userInput();
            }
            //if the userer hadnt answered yes to adding another user, they must be done
            else{
                //create html by feeding the ominus render (required in above), our array of objs
                const html = render(employeeArray);
                //take that html and feed it into writefile to actually create the html file
                fs.writeFile(outputPath, html, (err) => {
                    //if things went wrong, throw error
                    if (err) return console.log(err);
                    //otherwise console log
                    console.log('generating html output');
                  })
            }
        })
        //throw some errors of things went wrong
        .catch(error => {
            if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else when wrong
            }
        });
    }
    //start the whole user input cycle for the first time
    userInput();
}
//start everything
init();
