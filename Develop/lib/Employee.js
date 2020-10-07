//parent class for all employees
class Employee {
    //set properties common among all employees
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //each of these methods is used in the renderer to get the property and use it to gen html
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    //this get's overridden in each subclass
    getRole() {
        return "Employee"
    }
}
//export out for use in building subclasses
module.exports = Employee
