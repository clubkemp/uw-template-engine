const questions = [
    //confirm used to check if user is still adding users 
    {
        type:"confirm",
        name:"add",
        message: "Add more?",
    },
    //when adding more ask the following 4 questions
    {
        type:"input",
        name:"name",
        message: "What is the team member name?",
        when: (answers) => answers.add=== true,
    },
    {
        type:"input",
        name:"id",
        message: "What is the team member id?",
        when: (answers) => answers.add=== true,
    },
    {
        type:"input",
        name: "email",
        message: "What's your contact email?",
        when: (answers) => answers.add=== true,
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type:"list",
        name:"role",
        message: "Choose a role:",
        choices: ["Manager", "Engineer", "Intern"],
        when: (answers)=> answers.add === true
    },
    //based on the list chosen ask 1 of the following 3
    {
        type:"number",
        name:"officeNumber",
        message: "What is your office number?",
        when: (answers) => answers.role === "Manager",
    },
    {
        type:"input",
        name:"github",
        message: "What is your github handle?",
        when: (answers) => answers.role === "Engineer",
    },
    {
        type:"input",
        name:"school",
        message: "What school do you attend (or school of thought)",
        when: (answers) => answers.role === "Intern",
    }
]
//export for use in app.js
module.exports = questions