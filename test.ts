class test{
    name: string;
    age: number;

    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `typescriptテストです. ${this.name}は${this.age}歳`;
    }
}

let p = new test("shinji",34);
let s = p.sayHello();

document.getElementById("div1").innerHTML = s;