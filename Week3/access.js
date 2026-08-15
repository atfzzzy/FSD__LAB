"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.name = "Shafana";
        this.age = 19;
        this.city = "Bhimavaram";
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}
let p = new Person();
p.display();
