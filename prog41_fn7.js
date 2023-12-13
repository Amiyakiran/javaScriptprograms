const global ='global'

const parent = ()=>{
    let parentpro = 'parent'
    console.log(`parentpro is : ${parentpro} and global is: ${global}`);

    
    child = ()=>{
        let childpro = 'child'
        console.log(`parentpro is : ${parentpro} and global is: ${global} and childpro is ${childpro}`);

    }
    child()

}



parent()