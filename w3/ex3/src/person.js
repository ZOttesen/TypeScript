"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.salary = 0;
    }
    introduce() {
        return (`Hello, my name is ${this.name} im ${this.age} years oldand I am a ${this.occupation}. I earn ${this.salary}`);
    }
    incrementAge() {
        this.age++;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.default = Person;
