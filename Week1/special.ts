// any type
let value1: any = "Hello";
console.log("Any Value:", value1);

value1 = 100;
console.log("Any Value:", value1);

// unknown type
let value2: unknown = "Welcome to TypeScript";
console.log("Unknown Value:", value2);

// void function
function showMessage(): void {
    console.log("This is a void function.");
}

showMessage();