//              *
//            *   *
//           *  *   *
//         *  *   *   *

for(row=1;row<=4;row++){
    str=''
    for(spa=4;spa>row;spa--){
        str=str+' '
    }
    for(col=1;col<=row;col++){
        str= str+' *'
    }
    console.log(str);
}


//              *
//            *   *
//           *  *   *
//         *  *   *   *
//       *   *  *   *    *
//         *   *  *   *   
//           *   *  *
//             *  *
//               *


for(row=1;row<=4;row++){//1<=4//2<=4
    str=""//""//""
    for(sp=4;sp>=row;sp--){//4>=2//3>=2//2>=2//1>=2
        str= str+" "//####//###
    }
    for(col=1; col<=row;col++){//1<=2//2<=2//3<=2
        str= str+' *'//*//** 
    }
    console.log(str);//####*//###**
}
for(row=0; row<=5; row++){
    str = ''
    for ( spa = 0; spa < row; spa++) {
          str += " ";
        }
        // printing star
        for (col = 4; col>=row; col--) {
          str += " *";
        }
        console.log(str);
 }    
