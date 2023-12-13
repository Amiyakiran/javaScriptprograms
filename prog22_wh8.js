//w.a.p to find a given number is palindrom or not

num = 323
temp = num
console.log(`The given Number is : ${num}`); 
remainder =0
reverse = 0
while(num>0){
    remainder = num%10 
    reverse = (reverse*10)+remainder 
    num = parseInt(num/10)
}

if(temp==reverse){
    console.log('The given number is palindrom');
}
else{
    console.log('The given number is not palindrom');

}


