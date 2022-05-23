class Employee {
    public name: string;
    private salary: number;
    private jobTitle: string;
    
    constructor(name: string, salary: number, jobTitle: string) {
        this.name = name;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
}

const employees = [
    new Employee('Ivan', 10000, 'Manager'),
    new Employee('Andrew', 9000, 'Station Attendant'),
    new Employee('Pavel', 8000, 'Station Attendant'),
    new Employee('Vera', 11000, 'Cook'),
    new Employee('Mary', 7000, 'Mechanic'),
    new Employee('Gleb', 15000, 'Mechanic'),
    new Employee('Ivan', 10000, 'Mechanic'),
]

for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].name}`)
}