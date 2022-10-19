const Employee = require('./employee').default;

class Engineer extends Employee{
    constructor(name = ""){
        super(name);

        this.github = "github link"
    };

    github(){
        return `https://github.com/${this.github}`
    };

    getRole(){
        return "Engineer"
    }
}

export default Engineer;