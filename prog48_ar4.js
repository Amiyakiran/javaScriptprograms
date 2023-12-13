expense = [12000, 23000, 40000, 34000, 55000, 24000, 10000, 14000,2000]

// find the lowest expense
lowest = expense[0] //12000

for(let num of expense){ //12000 //23000 //40000 //34000//55000 //24000//10000 //14000
    if(num <=lowest){ //12000<=12000 //23000<=12000//40000<=12000//34000<=12000//55000<=12000//24000<=12000//10000<=12000//14000<=10000
        lowest = num //12000 //10000
    }
}
console.log("lowest Expense is :",lowest);//10000

// find the higest expense
console.log('-----------------------------');

highest = 0
for(let num of expense){
    if(num >=highest){
        highest = num 
    }
}
console.log("Highest EXpense is :",highest);

//find the total expense
console.log('-----------------------------');
sum = 0
for(let num of expense ){
    sum+=num
}

console.log('Total expense is :',sum);

