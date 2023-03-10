export default class Person{
    name: string;
    age:number;
    occupation:string;
    salary:number;

    constructor(name:string,age:number,occupation:string){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.salary = 0;
    }


    introduce(){
        return (`Hello, my name is ${this.name} im ${this.age} years oldand I am a ${this.occupation}. I earn ${this.salary}`)
    }

    incrementAge(){
        this.age++;
    }

    setSalary(salary:number){
        this.salary = salary;
    }
    
    getSalary():number{
        return this.salary
    }
}

