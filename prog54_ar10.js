var arr = [10 , 11, 12, 3 ,2, 4,100]

arr.sort((num1, num2)=> num1-num2)
console.log('Ascending order',arr);
arr.sort((num1, num2)=> num2-num1)
console.log('Descending order',arr);