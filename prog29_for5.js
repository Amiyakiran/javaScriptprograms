//w.a.p to find the GCD/HCF of given two numbers

//num1 = 12 - 1 2 3 4 6 12
//num2 = 28 - 1 2 4 7 14 28

num1 = 12
num2 = 28
gcd =0
for(i=1;i<=num1 && i<=num2; i++){
    if(num1%i==0 && num2%i==0){
        gcd =i
    }
}
console.log('The Highest common factor is :',gcd);

//w.a.p to find the lcm of two given numbers
//lcm
//4 = 4, 8 , 12, 16 20 24 28 32 36 40
//5= 5 10 15 20 25 30 
num1 = 8 // 8 16 24 32 40 
num2 = 10 // 10 20 30 40 50 60
lcm = 0
greater = num1>num2?num1:num2
    for(i=greater; i<=num1*num2;i++){
        if(i%num1==0 && i%num2==0){
            lcm = i
            break
        }
    }

console.log(lcm);
