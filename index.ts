import { Cook, Employee, Manager, Mechanic, StationAttendant } from "./model/employee";
import { AccountingReport, Report, StaffingReport } from "./model/report";

const employees: Employee[] = [
    new Manager('Ivan', 'Ivanov', 10000),
    new StationAttendant('Andrew', 'Petrov', 9000),
    new StationAttendant('Pavel', 'Ivanov', 8000),
    new Cook('Vera', 'Fedorova', 11000),
    new Mechanic('Mary', 'Ivanova', 7000),
    new Mechanic('Gleb', 'Petrov', 15000),
    new Mechanic('Ivan', 'Sidorov', 10000),
]

const reports: Report[] = [
    new AccountingReport(employees),
    new StaffingReport(employees),
]

reports.forEach(report => {
    // Polymorphism. We call same method from different subclasses, but the successor of the super class
    // Polymorphism allows you to share a method name, but to make it behave differently based on the subclass.
    report.print();
});
