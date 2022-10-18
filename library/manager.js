const Employee = require("./Employee");

class Manager extends Employee {
    constructor (Name, ID, Email, Number) {
        super(Name, ID, Email);
        this.Number = Number;
    }

    getRole() {
        return "Manager";
    }

    getNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;