const questions = [
    {
        type:"confirm",
        name:"add",
        message: "Add more?",
        choices: ["manager", "engineer", "intern", "quit"]
    },
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

module.exports = questions