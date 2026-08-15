"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name, city) {
    if (city) {
        console.log("Hello", name, "from", city);
    }
    else {
        console.log("Hello", name);
    }
}
greet("Shafana");
greet("Shafana", "Hyderabad");
