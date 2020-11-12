function EmployeeForm(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

let Employees = []

let Bob = new EmployeeForm("Bob", "Store Manager", 75000, "Part time")
let Jane = new EmployeeForm("Jane", "Cashier", 16600, )
let Susan = new EmployeeForm("Susan","Back Store Supervisor", 42000)
let Rick = new EmployeeForm("Rick", "Stocker", 30000, "Full Time")


// this.printEmployeeForm = function(){
//     console.log("name: " + this.name)
//     console.log("jobTitle: " + this.jobTitle)
//     // console.log("salary: " + this.salary)
//     // console.log("name: " + this.name)
// }


EmployeeForm.prototype.printEmployeeForm = function(){
    console.log("name: " + this.name)
    console.log("jobTitle: " + this.jobTitle)
    console.log("salary: " + this.salary)
    console.log("status: " + this.status)
}

Bob.printEmployeeForm();
console.log('======');
Jane.printEmployeeForm();
console.log('======');
Susan.printEmployeeForm();
console.log('======');
Rick.printEmployeeForm();
console.log('======');