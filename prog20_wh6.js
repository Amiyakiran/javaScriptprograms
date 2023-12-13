
// input    2   3    4
// output  24  369  4936
//        2*12  3*123 4*1234
//        2+22  3+33+333  4+44+444+4444

input = 4
i = 0
str =''
sum = 0
while(i<input){
    str = str+input
    console.log(str);
    sum = sum + Number(str)
    
 i++
}
console.log('result :', sum);

console.log('----------------------------------------');

inp=3
j=1
str =''
pro = 0
while(j<=inp){
    str = str+j
    j++
    /* console.log(typeof(str)); */
}
pro = inp*Number(str)
console.log(pro);

