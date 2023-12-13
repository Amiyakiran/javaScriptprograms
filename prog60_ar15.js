// array method -map

//w.a.p to print new array having the squares of the given array
a=[10,11,12,13,14,15]


sq=a.map(num=>num**2)
console.log('Square of the given array elements is:',sq);

a.forEach(num => {
    console.log(num**2)
});



//w.a.p to print the cube of the given array

cube=a.map(num=>num**3)
console.log('cube of the given array elements is:',cube);


//w.a.p to create a new array with numbers <=13 increment the number or number>13 decrement the number

b=[10,11,12,13,14,15] //o/p =[11,12,13,14,13,14]

arr=b.map(num=>num<=13?num+1:num-1)
console.log(arr);



