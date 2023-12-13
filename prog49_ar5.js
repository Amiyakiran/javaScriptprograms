//linear search 
var arr = [10 , 11, 12, 3 ,2, 4]
//check whether 2 is present in the array or not

searchitem = 12
ispresent = false
count = 0
for(let num of arr){//10
   count++
    if(num==searchitem){
       
        ispresent= true 
      
        break;
    }
    
    
}

console.log(count);
 console.log(ispresent?'present':'not present');
 


