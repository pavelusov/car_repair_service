import { Employee } from "./employee";

export abstract class Report {
    protected employees: Employee[];

    // Added Dependency injection - We'll pass employees list when will be to create instance of the AccountingReport class
    // the employees is a dependency
    constructor(employees: Employee[]) {
        this.employees = employees;
    }

    abstract print(): void;
}

export class AccountingReport extends Report {
    print(): void {
        const { length } = this.employees;
        console.log('== Accounting Report ==');
        for (let i = 0; i < length; i++) {
            const employee = this.employees[i];
            console.log(`${employee.getFullName()}: ${employee.getSalary()}`)
        }
    }
}

export class StaffingReport extends Report {
    print(): void {
        const { length } = this.employees;
        console.log('== Staffing Report ==');
        for (let i = 0; i < length; i++) {
            const employee = this.employees[i];
            console.log(`${employee.getFullName()}: ${employee.getJobTitle()}`)
        }
    }
}