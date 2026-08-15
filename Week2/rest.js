"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function total(...numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}
console.log("Total =", total(10, 20, 30, 40));
