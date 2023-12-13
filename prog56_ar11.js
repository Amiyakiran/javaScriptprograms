p=[10, 11, 12, 20, 30]
q=[11, 20, 25, 30, 33]


 a =0
 b=0
 ispresent = false
count =0
 while(a<p.length && b<q.length){
    count++
    if(p[a]==q[b]){
        console.log(p[a]);
        ispresent= true
        a++
        b++
    }
    else if(p[a]<q[b]){
        a++
    }
    else if(p[a]>q[b]){
        b++
    }
 }

 console.log(count);
 !ispresent&&console.log('No common numbers');

