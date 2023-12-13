//w.a.p to print duplicate elements from the given array ans:10 ,20, 30
a=[100, 200, 300, 20, 30, 40, 50, 60, 10]
isDuplicate = false
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            isDuplicate= true
            console.log(a[i]);
        }
    }
}
/* if(isDuplicate==false){
    console.log('no Duplication');
}
 */

 !isDuplicate&&console.log('no duplication');

