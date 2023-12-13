//call back function

//function definition
function greet(name,callback){ // name = peter callback = callme
        console.log('hai ',name); // hai peter
    callback()//callme()
}
function callme(){
    console.log('iam a call back function');
}


//function call
greet('peter',callme)