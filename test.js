"use strict";
class test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return `typescriptテストです. ${this.name}は${this.age}歳`;
    }
}
let p = new test("shinji", 34);
let s = p.sayHello();
document.getElementById("div1").innerHTML = s;
