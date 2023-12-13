//array method - find, includes,indexOf

fruits=['apple','mango','orange']
//print tha value mango from the given array if mango is a item 

b=fruits.find(fruit=>fruit=='mango')
console.log(b);
console.log('-----------------------------');

b1 = fruits.includes('mango')?'yes':'no'
console.log(b1);
console.log('-----------------------------');

mango=fruits.indexOf('mango')
console.log(mango);
console.log('-----------------------------');
