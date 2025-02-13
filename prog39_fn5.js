//call back function

//A callback function is a function that is passed as an argument to another function and is executed after that function completes its execution

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
