// "Task 1 - Created Employee Class"
//Constructor creating an Employee class with name, id, department, and salary properties
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };

//Using getDetails method to return the employee information.
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; 
    };
//Using calculateAnnualSalary method to return the annual salary of the employee.
    calculateAnnualSalary() {
        return this.salary * 12;
    };
};  

//Test Data
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000
