class Student {
    name: string = "Shafana";

    display(): void {
        console.log("Student Name:", this.name);
    }
}

let s = new Student();
s.display();

export {};