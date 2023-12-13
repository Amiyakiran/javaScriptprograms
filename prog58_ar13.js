//w.a.p to print pairs whose pair sum is 6 ans : 2, 4
b=[2, 3, 4, 5]


psum=9
low=0
up=b.length-1
ispresent = false
count = 0
while(low<up){
    count++
    currsum =b[low]+b[up]

    if(currsum==psum){
        ispresent=true
        console.log(`(${b[low]},${b[up]})`);
        low++
    }
    else if (currsum<psum){
        low++
    }
    else if (currsum>psum){
        up--
    }
}
console.log(count);
!ispresent&&console.log('no pair')