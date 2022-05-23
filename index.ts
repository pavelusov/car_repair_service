import { Cook, Employee, Manager, Mechanic, StationAttendant } from "./model/employee";

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