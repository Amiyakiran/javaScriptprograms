//object creation:

// [1000,'Neel','developer','kochi',25000,3]

employee={
    empid:1000,
    empname:"Neel",
    empdesig:"developer",
    emplocation:"kochi",
    empsalary:25000,
   
}

//display the object
console.log(employee);

//display a particular value - object_name.key or object_name["key"]
console.log(`employee name is ${employee.empname}`);
console.log(`employee name is ${employee['empname']}`);
//display the salary of the employee
console.log(`employee salary is ${employee["empsalary"]}`);
console.log('-----------------------------------');
//display only the key of the object

for(let key in employee){
    console.log(key);
}
console.log('-----------------------------------');
//check whether employee location is present or not if present print location else print not available
/* if('emplocation' in employee){
    console.log('present');
}
else{
    console.log('not available');
} */
console.log(`employee location is  ${'emplocation' in employee?'present':'not present'}`);
//check whether employee gender is present or not, if present print gender is present else add new key as empgender
// add new item into an object : object_name["key"]=value

employee["empexperience"]=3
console.log(employee);

"empGender" in employee?console.log('present'):employee["empGender"]='Male'
console.log(employee);