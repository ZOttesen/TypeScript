"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const data_json_1 = __importDefault(require("./data.json"));
function getPeople() {
    return new Promise((resolve) => {
        let peopleArray = new Array;
        data_json_1.default.forEach(person => {
            const newPerson = new person_1.default(person.name, person.age, person.occupation);
            newPerson.setSalary(person.salary);
            peopleArray.push(newPerson);
        });
        resolve(peopleArray);
    });
}
exports.default = getPeople;
