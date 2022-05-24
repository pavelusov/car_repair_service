import { Cook, Employee, Manager, Mechanic, StationAttendant } from "./model/employee";
import {AccountingReport, Report, ScheduleReport, StaffingReport} from "./model/report";
import { afternoonShift, morningShift } from "./model/shift";

const employees: Employee[] = [
    new Manager('Ivan', 'Ivanov', 10000, morningShift),
    new StationAttendant('Andrew', 'Petrov', 9000, afternoonShift),
    new StationAttendant('Pavel', 'Ivanov', 8000, morningShift),
    new Cook('Vera', 'Fedorova', 11000, afternoonShift),
    new Mechanic('Mary', 'Ivanova', 7000, afternoonShift),
    new Mechanic('Gleb', 'Petrov', 15000, morningShift),
    new Mechanic('Ivan', 'Sidorov', 10000, afternoonShift),
]

const reports: Report[] = [
    new AccountingReport(employees),
    new StaffingReport(employees),
    new ScheduleReport(employees),
]

reports.forEach(report => {
    // Polymorphism. We call same method from different subclasses, but the successor of the super class
    // Polymorphism allows you to share a method name, but to make it behave differently based on the subclass.
    report.print();
});
