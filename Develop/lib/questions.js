const questions = [
    {
        type: "input",
        name: "manager",
        message:"Who is the team manager?"

    },
    {
        type:"confirm",
        name:"add-more",
        message: "Add an employee?"
    },
    {
        type:"list",
        name:"role",
        message: "What is this employees role?",
        choices: ["engineer", "intern"]
    }
]

module.exports = questions