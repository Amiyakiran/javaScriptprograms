
//w.a.p to display a number in its reverse order

//123
//rem = 123%10 =3
//sum = 
// sum = sum*10 + rem
// num = num/10 =12.3 math.floor() parseInt()

num = 323
console.log(`The given Number is : ${num}`); //892
remainder =0
reverse = 0
while(num>0){
    remainder = num%10  //892%10 =2 //9 // 8
    reverse = (reverse*10)+remainder // 0*10=0+2=2 //2*10=20=9=29 //29*10=290+8 =298
    num = parseInt(num/10)//892/10=89.2 =89//89/100=8 //8/10 =0.8 0
}
console.log(`the reverse of the given number is :${reverse}`);


