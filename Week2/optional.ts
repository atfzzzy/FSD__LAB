function greet(name: string, city?: string): void {
    if (city) {
        console.log("Hello", name, "from", city);
    } else {
        console.log("Hello", name);
    }
}

greet("Shafana");
greet("Shafana", "Hyderabad");

export {};