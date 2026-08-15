function total(...numbers: number[]): number {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log("Total =", total(10, 20, 30, 40));

export {};