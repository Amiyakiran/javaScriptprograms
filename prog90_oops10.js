exp="10*2+5"
console.log('expression evaluation');

try{
    const result = eval(exp)
    console.log(result);
}
catch{
    console.log('error in eval statement');
}

finally{console.log('task completed');}