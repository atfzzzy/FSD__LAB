class College {
    readonly collegeName = "SVECW";
    static location = "Bhimavaram";

    show(): void {
        console.log(this.collegeName);
        console.log(College.location);
    }
}

let c = new College();
c.show();

export {};