//operators

//1) assignment Operators =
//  2) Arithematic operators + - / * % **

// + operator

var x = 10
var y = 30
var z = x+y
 console.log(`sum of x and y is : ${x+y}`);
 console.log(`sum of x and y is : ${z}`);
 console.log('---------------------------------------');

 var x1 = 10
 var y1 = 30
 console.log(`difference of x and y is : ${x1-y1}`);
 console.log(`difference of x and y is : ${y1-x1}`);

 console.log('---------------------------------------');

 var x2 = 10
 var y2 = 30
 console.log(`quotient of x and y is : ${x2/y2}`);
 console.log(`quotient of x and y is : ${y2/x2}`);
 console.log('---------------------------------------');

 var x3 = 10
 var y3 = 30
 console.log(`product of x and y is : ${x3*y3}`);
 console.log('---------------------------------------');

 var x4 = 10
 var y4 = 30
 
 console.log(`remainder of x and y is : ${y4%x4}`);

console.log('---------------------------------------');
  var x5 = 10
 var y5 = 3
 console.log(`cube of x : ${x5**y5}`);

 console.log('---------------------------------------');


//3) Relational operators
// > >= < <= == ===

num1 = 10
num2 = '10'
console.log(`is ${num1} equal to ${num2}: ${num1==num2}`);
console.log(`is ${num1} equal to ${num2}: ${num1===num2}`);
console.log('---------------------------------------');

//4 Logical operators

/*  AND &&
      T && T = T
      T && F = F
      F && T = F
      F && F = F */

      /* OR

      T || T = T
      T || F = T
      F || T = T
      F || F = F
       */
      /* NOT
      !T = F
      !F =T */

a=10
 console.log(`5<a<20 : ${5<a && a<20}`);
 console.log(`5<a<20 : ${5<a || a<20}`);
 console.log('---------------------------------------');

 a=30
 console.log(`5<a<20 : ${5<a && a<20}`);
 console.log(`5<a<20 : ${5<a || a<20}`);
 console.log('---------------------------------------');


//5 incremental(++) / decremental (--) operators
inc = 10
inc++
console.log(inc);
dec = 10
dec--
console.log(dec);
console.log('----------------------------------');

inc1 =10
console.log(`initial value : ${inc1}`);//10
console.log(`incremented ${inc1++}`);//10
console.log(`after increment ${inc1}`);//11
console.log('----------------------------------');

inc1 =10
console.log(`initial value : ${inc1}`);//10
console.log(`incremented ${++inc1}`);//11
console.log(`after increment ${inc1}`);//11
console.log('----------------------------------');

//6 short hand operators
// += -= *= /=
// x= x+10 => x+=10

var short =10
short += 10 // short = short +10
console.log('result = ', short);
console.log('----------------------------------');

//7 ternary operators
//condition?true:false