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


//Task 2 - Created Manager Class with Inheritance
//Creating a Manager class that extends the Employee class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
      };

//Using getDetails method to return the Team Size.
getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
  };

  //Using calculateAnnualSalary method to calculate 10% bonus
  calculateBonus() {
    return super.calculateAnnualSalary() * 0.10;
  };
 //******** Task 4 Modifying calculateAnnualSalary**********
  calculateAnnualSalary() { 
    //Returning employee's annual salary + calculateBonus method
    return super.calculateAnnualSalary() + this.calculateBonus(); };
}

//Test Data
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


//Task 3 - Created Company Class
//Creating a Company class that has a property name
class Company {
    constructor(name, employees) {
        this.name = name;
        this.employees = [];
    };
// Creating an AddEmployee method to add an employee to the employees array.
    addEmployee(employee) {
        this.employees.push(employee);
    }
    //Creating a listEmployees method to log all employees' details.
    //Setting up listEmployees method
    listEmployees() { 
    //Using forEach loop to run through the employees array and log each employee's details.
        this.employees.forEach(employee => {console.log(employee.getDetails());
        }); 
    }
    // **********Task 4 - Implemented Payroll System**********
    //Creating a calculateTotalPayroll method to calculate the total payroll of all employees.
    calculateTotalPayroll()  {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
     }
    }
      //Task 4 - returns the sum of all employee salaries (including managers)
    

//Test Data
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

//Task 4 - Implemented Payroll System
//Test Data
console.log(company.calculateTotalPayroll()); 
// Expected output: 165600 (assuming emp1 and mgr1 salaries)