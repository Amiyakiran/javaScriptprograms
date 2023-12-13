//string method

sentance='Good morning all'

//print all vowels present in the given sentance

vowels=['a','e','i','o','u','A','E','I','O','U']
console.log(vowels);
/* characters=sentance.split('')
console.log(characters);

for(let char of characters){
    if(vowels.includes(char)){
        console.log(char);
    }
} */

Array.from(sentance).filter(char=>vowels.includes(char)).forEach(item=>{console.log(item);})