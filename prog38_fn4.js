//why es6 version of js arrow function is prefered over regular function?
//1.1. Concise Syntax - You can omit the function keyword, curly braces, and even the return keyword (for single-expression functions).
//2. implicit return - For single-expression functions, arrow functions allow for an implicit return, saving you the need to use the return keyword explicitly.



//w.a.p to find the sum of three numbers
//syntax
//  variable = (arg1,----------argn) => {statement  }

const add = (num1,num2,num3)=>{
    sum=num1+num2+num3
   return sum}

console.log('sum of three numbers is :',add(20,30,10));
console.log('-------------------------------------');

//w.a.p to find the cube of a given number

const cube = (num) => num**3
console.log('cube of the given number is :',cube(6));

