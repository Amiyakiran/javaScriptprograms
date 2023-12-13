//creation of class

class Employee{
    //property = variable inside class
    empId
    empName
    empDesg
    empSalary
    //constructors =property initialize
    constructor(id , ename, desg,salary){ //instance variable this.property_name
        this.empId=id
        this.empName=ename
        this.empDesg=desg
        this.empSalary=salary

    }
    //methods=> functions inside a class
    display(){
        console.log(`employee id is ${this.empId} , employee name is ${this.empName} , employee designation is ${this.empDesg} , employee salary is ${this.empSalary}`);
    }
}

//creation of object

 const emp1= new Employee(1000, "max", "developer",25000)
 emp1.display()
 const emp2= new Employee(1001, "neel", "tester",20000)
 emp2.display()