// w.a.p to swap two number


//Algorithm

//num1 and num2
var num1 = 10
var num2 = 30

console.log(`value of num1 and num2 before swap ${num1} and ${num2}`);
//create temp variable
var temp 
//value of num1 is added to temp
temp = num1
//value of num2 is added to num1
num1 = num2
//value of temp is added to num2
num2 = temp
//display num1 and num2
console.log(`value of num1 and num2 after swap ${num1} and ${num2}`);

console.log('-------------------------------');

var num3 = 40
var num4 = 60
console.log(`value of num3 and num4 before swap ${num3} and ${num4}`);

num3 = num3 + num4
num4 = num3 - num4
num3 = num3 - num4
console.log(`value of num3 and num4 after swap ${num3} and ${num4}`);
console.log('-------------------------------');





