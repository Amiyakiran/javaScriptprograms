//w.a.p to print common numbers from a given arrays ans: 11, 20, 30
p=[10, 11, 12, 20, 30]
q=[11, 20, 25, 30, 33]
count =0
isfound = false
for(let i of p){//10 
    for(let j of q){//11 //20 //25
        count++
        if(i==j){
            isfound=true
            console.log(i);
            break
        }
    }
}
console.log(count);
!isfound&&console.log('No common numbers');