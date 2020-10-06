const questions = [
    {
        type:"confirm",
        name:"add",
        message: "Add more?",
        choices: ["manager", "engineer", "intern", "quit"]
    },
    {
        type:"list",
        name:"role",
        message: "Choose an action?",
        choices: ["manager", "engineer", "intern"],
        when: (answers)=> answers.add === true
    },
    {
        type:"number",
        name:"officeNumber",
        message: "What is your office number?",
        when: (answers) => answers.role === "manager",
    },
    {
        type:"input",
        name:"github",
        message: "What is your github handle?",
        when: (answers) => answers.role === "engineer",
    },
    {
        type:"input",
        name:"school",
        message: "What school do you attend (or school of thought)",
        when: (answers) => answers.role === "intern",
    }
]

module.exports = questions