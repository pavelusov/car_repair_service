class Employee {
    public name: string;
    private salary: number;
    
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

const employees = [
    new Employee('Ivan', 10000),
    new Employee('Andrew', 9000),
    new Employee('Pavel', 8000),
    new Employee('Vera', 11000),
    new Employee('Mary', 7000),
    new Employee('Gleb', 15000),
    new Employee('Ivan', 10000),
]

for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].name}`)
}