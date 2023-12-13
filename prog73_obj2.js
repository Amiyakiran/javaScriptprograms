 student = {
    name:'vysakh',
    rollno:57,
    class: '8th',
    isvaccinated:true
 }
 console.log(student);

 // location

 
/* "location" in student?console.log('present'):student["location"]='thrisur'
console.log(student); */

 Object.assign(student,{location:'thrisur'})
 console.log(student);
 /* "location" in student?console.log('present'):Object.assign(student,{location:'thrisur'})
console.log(student); */

//to update the value of an object
student.rollno+=3
console.log(student);

student.name='rity'
console.log(student);

//how to delete an item
console.log(delete student.isvaccinated);
console.log(student);
