//w.a.p to check whether the given number is prime or not

num=1
isPrime=true
if(num>1){
    for(i=2;i<num;i++){//2<4
        if(num%i==0){//4%2==0
         isPrime=false//false
         break
         }
    }
}
else{
    isPrime=false
}


isPrime?console.log('PRIME'):console.log('not a prime'); 


//w.a.p to display all prime numbers from 2 to 50
//w.a.p to display all armstrong numbers from 8 to 500
