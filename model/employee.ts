export class Employee {
    name: string;
    protected salary: number;
    readonly jobTitle: string;

    constructor(name: string, salary: number, jobTitle: string) {
        this.name = name;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
}

export class Manager  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Manager')
    }
}

export class StationAttendant  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Station Attendant')
    }
}

export class Cook  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Cook')
    }
}

export class Mechanic  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Mechanic')
    }
}
