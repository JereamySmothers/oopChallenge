class Employee {
    constructor(name = "") {
        this.name = name;
        this.id = Math.floor(Math.random());
        this.email = "email";
    };

    getName() {
        return `${this.name}`
    };

    getID() {
        return this.id
    };

    getEmail() {
        return `${this.email}`
    };

    getRole() {
        return "Employee"
    }
}

export default Employee;