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



str='hello'

console.log(str[4]);

//w.a.p to check whether the given string is palindrom or not?
//'malayalam'

str='malayalam'

start = 0
end= str.length-1
ispalindrome=true
while(start<end){
    if(str[start]!=str[end]){
        ispalindrome=false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrome':'not palindrome');

//another - for

pal=''
for(i=str.length-1;i>=0;i--){
   pal += str[i]
}
console.log(str==pal?'palindrome':'not palindrome');
