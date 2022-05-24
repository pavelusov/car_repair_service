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
        console.log('== Accounting Report ==');
        for (const employee of this.employees) {
            console.log(`${employee.getFullName()}: ${employee.getSalary()}`)
        }
    }
}

export class StaffingReport extends Report {
    print(): void {
        console.log('== Staffing Report ==');
        for (const employee of this.employees) {
            console.log(`${employee.getFullName()}: ${employee.getJobTitle()}`)
        }
    }
}