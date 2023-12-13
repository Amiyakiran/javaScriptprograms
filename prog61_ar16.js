//array method - Reduce

a=[10,1,2,33,4,5,6,7]

//find the highest value 
highest= a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log("highest value is:",highest);
//find the lowest value
lowest= a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log("lowest value is:",lowest);
// find the total sum
sum = a.reduce((num1,num2)=>num1+num2)
console.log('total sum is:',sum);
