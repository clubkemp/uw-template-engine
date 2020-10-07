//require in the employee class to extend it
const template = require("./Employee")

class Engineer extends template {
    //construct the class using the args
    constructor(name, id, email, github){
       //set super based on employee
        super(name, id, email)
        this.name = name,
        this.id = id
        this.email = email
        this.github = github;
    }
    //override get role of Employee
    getRole() {
        return "Engineer"
    }
    //add a github method for renderer
    getGithub() {
        return this.github;
    }
}
//export for use in app.js
module.exports = Engineer