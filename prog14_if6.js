
//w.a.p to input 3 number and print the second largest number and sort the three numbers in descending order

var num1 = 10
var num2 = 20
var num3 = 30

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`Second largest number is: ${num2}`);
        console.log(`descending order is : ${num1},  ${num2},  ${num3} `);
    }
    else{
        console.log(`Second largest number is: ${num3}`);
        console.log(`descending order is : ${num1},  ${num3},  ${num2} `);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`Second largest number is: ${num1}`);
        console.log(`descending order is : ${num2},  ${num1},  ${num3} `);
    }
    else{
        console.log(`Second largest number is: ${num3}`);
        console.log(`descending order is : ${num2},  ${num3},  ${num1} `);


    }
}
else if (num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`Second largest number is: ${num1}`);
        console.log(`descending order is : ${num3},  ${num1},  ${num2} `);
  
    }
    else{
        console.log(`Second largest number is: ${num2}`);
        console.log(`descending order is : ${num3},  ${num2},  ${num1} `);

    }
}
else{
    console.log('All numbers are equal');
}