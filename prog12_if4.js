//w.a.p  to print  'fizz' is the number is divisible by 3
//'buzz' if the number is divisible by 5
//'fizzbuzz' if the number is divisible by 15

num=14

if(num%15==0){
    console.log('fizzbuzz');
}
else if (num%5==0){
    console.log('buzz'); 
}
else if(num%3==0){
    console.log('fizz'); 
 
}
else{
    console.log('The is number divisble by 3, 5, 15');
}


