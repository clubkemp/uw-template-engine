//require in employee to extend
const template = require("./Employee")

class Intern extends template {
    //construct the class
    constructor(name, id, email, school){
       //use super based on Employee
        super(name, id, email)
        this.name = name,
        this.id = id
        this.email = email
        this.school = school;
    }
    //override the getROle method from Employee
    getRole() {
        return "Intern"
    }
    //add get school for renderer html
    getSchool() {
        return this.school;
    }
}
//export for use in app.js
module.exports = Intern