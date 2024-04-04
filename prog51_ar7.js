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



b=[]
 for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            isDuplicate=false
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){
                    isDuplicate=true
                    break
                }
            }
            if(!isDuplicate){
                b.push(a[i])
            }
        }
    }
 }
console.log(b);

 b=[]
 for(i=0;i<=a.length;i++){//10
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j] && !b.includes(a[i])){
           b.push(a[i]);
            break
        }
    }
 }
console.log(b);

