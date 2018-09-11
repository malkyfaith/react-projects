
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi. I am ${name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor)
            desc += `Their major is ${this.major}`;
        return desc;
    }
}

const p1 = new Person('Malkeet Singh', 25);
console.log(p1);
console.log(p1.getGreetings());
console.log(p1.getDescription());



const p2 = new Person();
console.log(p2);
console.log(p2.getGreetings());
console.log(p2.getDescription());

const s1 = new Student('Malkeet Singh', 25, 'Computer Science');
console.log(s1.getDescription());

