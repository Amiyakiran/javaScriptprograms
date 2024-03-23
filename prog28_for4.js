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
// looping from lowerNumber to higherNumber
for (let i = 2; i <= 50; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
//w.a.p to display all armstrong numbers from 8 to 500
for (let i = 8; i <= 500; i++) {

    // converting number to string 
    let numberOfDigits = (i+"").length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    if(numberOfDigits!=1){
        /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    }
    else{
        sum=0
    }
    
 
    if (sum == i) {
        console.log(i);
    }
}
