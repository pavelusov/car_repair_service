import { Employee } from "./employee";

export class AccountingReport {
    private employees: Employee[];

    // Added Dependency injection - We'll pass employees list when will be to create instance of the AccountingReport class
    // the employees is a dependency
    constructor(employees: Employee[]) {
        this.employees = employees;
    }
}
