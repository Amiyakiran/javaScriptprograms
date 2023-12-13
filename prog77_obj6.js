

pattern ="ABBAABAB"
//w.a.p to print the first recursive letter -B

character = Array.from(pattern)
console.log(character);

obj={}

for(let char of character){
    if(char in obj){
        console.log('first recursive letter:',char);
        break
    }
    else{
        obj[char]=1 //a:1 b:1
    }
}
