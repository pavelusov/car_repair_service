import { Cook, Employee, Manager, Mechanic, StationAttendant } from "./model/employee";
import {AccountingReport, StaffingReport} from "./model/report";

const employees: Employee[] = [
    new Manager('Ivan', 'Ivanov', 10000),
    new StationAttendant('Andrew', 'Petrov', 9000),
    new StationAttendant('Pavel', 'Ivanov', 8000),
    new Cook('Vera', 'Fedorova', 11000),
    new Mechanic('Mary', 'Ivanova', 7000),
    new Mechanic('Gleb', 'Petrov', 15000),
    new Mechanic('Ivan', 'Sidorov', 10000),
]

const accountingReport = new AccountingReport(employees);
accountingReport.print();

const staffingReport = new StaffingReport(employees);
staffingReport.print();
