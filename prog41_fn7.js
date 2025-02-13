//A nested function is a function defined inside another function. Essentially, it's a function within a function. In JavaScript, nested functions are created by placing one function inside the body of another function.
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
