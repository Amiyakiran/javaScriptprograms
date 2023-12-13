//array method - filter

a=[10,11,12,13,14,15]

//display all even numbers from an array
  even=a.filter(num=>num%2==0)
  console.log(even);
//display all numbers greater than 13
num = a.filter(num=>num>13)
console.log(num);

//yes or no
num1 = a.some(num=>num>13)
console.log(num1?'yes':'no');