const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee{
    #programmingLanguages = [];

    constructor(name, position, salary, programmingLanguages) {
        super(name, position, salary);
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language) {
        if (language) {
            this.#programmingLanguages.push(language);
        } else {
            throw new Error("You must provide a programming language");
        }
    }
}

module.exports = {
    SoftwareEngineer,
}