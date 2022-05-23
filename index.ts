class Employee {
    name: string;
    protected salary: number;
    readonly jobTitle: string;
    
    constructor(name: string, salary: number, jobTitle: string) {
        this.name = name;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
}

class Manager  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Manager')
    }
}

class StationAttendant  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Station Attendant')
    }
}

class Cook  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Cook')
    }
}

class Mechanic  extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary, 'Mechanic')
    }
}

const employees: Employee[] = [
    new Manager('Ivan', 10000),
    new StationAttendant('Andrew', 9000),
    new StationAttendant('Pavel', 8000),
    new Cook('Vera', 11000),
    new Mechanic('Mary', 7000),
    new Mechanic('Gleb', 15000),
    new Mechanic('Ivan', 10000),
]

for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].jobTitle}: ${employees[i].name}`)
}