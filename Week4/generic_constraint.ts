interface Person {
    name: string;
}

function printName<T extends Person>(obj: T): void {
    console.log(obj.name);
}

printName({ name: "Shafana" });

export {};