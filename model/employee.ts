import { Shift } from "./shift";

export class Employee {
    private firstName: string;
    private lastName: string;
    private salary: number;
    private jobTitle: string;
    private shift: Shift;

    constructor(firstName: string, lastName: string, salary: number, jobTitle: string, shift: Shift) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.jobTitle = jobTitle;
        this.shift = shift;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    getSalary(): number {
        return this.salary;
    }


    getJobTitle(): string {
        return this.jobTitle;
    }

    getShift(): string {
        return this.shift.getShift();
    }
}

export class Manager  extends Employee {
    constructor(firstName: string, lastName: string, salary: number, shift: Shift) {
        super(firstName, lastName, salary, 'Manager', shift)
    }
}

export class StationAttendant  extends Employee {
    constructor(firstName: string, lastName: string, salary: number, shift: Shift) {
        super(firstName, lastName, salary,'Station Attendant', shift)
    }
}

export class Cook  extends Employee {
    constructor(firstName: string, lastName: string, salary: number, shift: Shift) {
        super(firstName, lastName, salary, 'Cook', shift)
    }
}

export class Mechanic  extends Employee {
    constructor(firstName: string, lastName: string, salary: number, shift: Shift) {
        super(firstName, lastName, salary,'Mechanic', shift)
    }
}
