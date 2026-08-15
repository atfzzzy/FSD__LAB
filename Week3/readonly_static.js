"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class College {
    constructor() {
        this.collegeName = "SVECW";
    }
    show() {
        console.log(this.collegeName);
        console.log(College.location);
    }
}
College.location = "Bhimavaram";
let c = new College();
c.show();
