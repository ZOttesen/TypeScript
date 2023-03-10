import Person from './person';
import data from "./data.json"

export default function getPeople(): Promise<Person[]>{
    return new Promise((resolve) => {
        let peopleArray: Person[] = new Array
        data.forEach(person => {
            const newPerson = new Person(person.name,person.age,person.occupation)
            newPerson.setSalary(person.salary)
            peopleArray.push(newPerson)
        });
        resolve(peopleArray);
    })
}