//Different ways to display array item

arr = ['Apple', 'Mango','Pineapple','Strawberry','kiwi']

for(index=0;index<arr.length;index++){ //0 //0<5 //1<5
    console.log(arr[index]); //apple //mango
}

console.log('---------------------------');
for(let i in arr){
    console.log(arr[i]);

}
console.log('---------------------------');

for(let fruit of arr){
    console.log(fruit);
}

