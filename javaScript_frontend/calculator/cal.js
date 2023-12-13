function display(num){
    result.value+=num
}

function equal(){
   try{ result.value=eval(result.value)}
   catch{
    result.value="error"
    setTimeout(()=>{result.value=""},1000)
   }
}

function clearAll(){
    result.value=""
}

function back(){
    result.value=result.value.slice(0,-1)
}