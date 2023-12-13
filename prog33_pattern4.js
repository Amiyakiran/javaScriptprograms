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