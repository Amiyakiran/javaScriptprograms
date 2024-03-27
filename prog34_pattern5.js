//hollow traingle

//             *
//         *       *
//      *              *
//   *  *  *   *   *   *  *




for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=7;col++){
        if(row+col==5 || col-row==3 || row==4){
            str = str+"*"
        }
        else{
            str = str+ ' '
        }
    }
    console.log(str);
}


// * * * * *
// *       *
// *       *
// *       *
// * * * * *
  
for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=5;col++){
        if(col==1 || col==5 || row==1 || row==5){
            str = str+'*'
        }
        else{
            str = str+' '
        }
    }
    console.log(str);
}


// 1                                                            
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++){
    str =''
    for(col=1;col<=row;col++){
      let n = (row+col)%2
      if(n==0){
        str= str+1
      }
      else{
        str=str+0
      }
    }
    console.log(str);
}

// * * * * *
//   *  *
//     *
//   *  *
// * * * * *


for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(col==row || col+row==6 || row==1 || row==5){
            str= str+"*"
        }
        else{
            str= str+" "
        }
    }
   console.log(str);
}


/*              1
              2 3 4
            5 6 7 8 9
        10 11 12 13 14 15 16
     17 18 19 20 21 22 23 24 25     */

let variable = 1;
// outer loop runs for `rows` no. of times
for (let row = 1; row <= 5; row++) {
    str = " "
   // Inner Loop - I -> for the spaces
   for (let space = 1; space <= 5 - row; space++) {
      str += " ";
   }

   // Inner Loop - II -> for the series of numbers
   for (let col = 1; col <= 2 * row - 1; col++) {
      str += variable+" ";
      variable++;
   }

   console.log(str);
}
