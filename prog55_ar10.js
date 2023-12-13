//binary search
//var arr = [10 , 11, 12, 3 ,2, 4]

//Algorithm

//1) sort the array
//2)repeat untill low<=up
//3) find the mid

//4)compare mid with searchitem
   // mid== searchitem
        //print the number is found
   // mid < search item
            // low = mid+1
   // mid> searchitem
       // up = mid -1

var arr = [10 , 11, 12, 3 ,2, 4]
 searchitem =3
 low = 0
 up = arr.length - 1 
 ispresent = false      
count=0
 //sort
 arr.sort((num1,num2)=>num1-num2)
console.log(arr);
 while(low<=up){
    count++
    mid = Math.floor((low+up)/2)

    if(arr[mid]==searchitem){
       ispresent=true
        break
    }
    else if(arr[mid]<searchitem){
        low = mid+1
    }
    else if(arr[mid]>searchitem){
        up = mid-1
    }
 }
 console.log(count);

 console.log(ispresent?'present':'not present');






 