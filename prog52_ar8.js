//w.a.p to print pairs whose pair sum is 6 ans : 2, 4
b=[2, 3, 4, 5]

pairsum = 9
noPairs = false
count =0
for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
      count++
        if(b[i]+b[j]==pairsum){
            noPairs=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}
console.log(count);
!noPairs&&console.log('no pair')



