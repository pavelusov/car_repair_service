export class Employee {
    private firstName: string;
    private lastName: string;
    private salary: number;
    private jobTitle: string;

    constructor(firstName: string, lastName: string, salary: number, jobTitle: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.jobTitle = jobTitle;
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
}

export class Manager  extends Employee {
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName, salary, 'Manager')
    }
}

export class StationAttendant  extends Employee {
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName, salary,'Station Attendant')
    }
}

export class Cook  extends Employee {
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName, salary, 'Cook')
    }
}

export class Mechanic  extends Employee {
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName, salary,'Mechanic')
    }
}
