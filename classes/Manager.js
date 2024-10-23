const { Employee } = require("./Employee");

class Manager extends Employee{
    #employeesManaged = [];
    constructor(name, position, salary, department, employeesManaged){
        super(name, position, salary)
        this.department = department;
        this.#employeesManaged = employeesManaged;
    }
    getEmployeesManaged(){
        return this.#employeesManaged;
    }
    addEmployeeManaged(employee){
        this.#employeesManaged.push(employee);
    }
    
}


module.exports = {
    Manager,
}