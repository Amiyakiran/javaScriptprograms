//w.a.p to find whether a given 3 digit number is armstrong or not

//153 = 1**3 +5**3 +3**3 =1+152+27 = 153

num = 152
temp = num
rem = 0
sum = 0
while(num>0){ //152>0 15>0
    rem = num%10 //152%10 = 2 //5 /
    sum = sum + rem**3 //0+8 =8 //125+8=133 = 134
    num = parseInt(num/10)//152/10 =15.2=15//1 //0
}
if (temp == sum) {
    console.log('armstrong');
    
}
else{
    console.log('not armstrong');
}

console.log('------------------------------------------------------------------');

//w.a.p to display numbers whose exponential is  in the range of 8 to 36
// user can input power to find the exponential for a particular number

power = 2
num =1
while(num<=36){
    if(8<=num**power && num**power<=36){
        console.log(num);
    }
    
    if(num**power>=36){
        break;
    }
    num++
}

//break : Used to forcefully exit a loop while meting a condition
