"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    show() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
let e = new Employee("Rahul", 50000);
e.show();
