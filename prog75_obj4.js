text='hai hello all hello world all'
//w.a.p  to print the word count of the given text
//o/p:{hai:1,hello:2,all:1,world:1}

//algorthm

// text is convert to an array have all words
words=text.split(' ')
console.log(words);
//create an empty object
obj={}
//fetch each word from the array - for of

for(let word of words){//hai //hello //all //hello
//and check whether the given word is there in the object -  in
  if(word in obj){
    //if present increase the count
    obj[word]+=1
  }
  else{
    //else add the word into the object
    obj[word]=1//hai:1,hello:1 //all:1
  }
}

//display
console.log(obj);
console.log('-----------------------');
console.log('using array method');
wc={}
text.split(' ').forEach(item => item in wc?wc[item]+=1:wc[item]=1);
console.log(wc);



//numArray = [10,20,30,40,30,20,50,30,60,70,10,40,80]
// w.a.p to find the number count
obj = {}
arr.map(item=>item in obj?obj[item]+=1:obj[item]=1)
console.log(obj);

//pattern : ABBAABAB
//w.a.p to print the first recursive letter -B

obj1={}
Array.from(pattern).map(item=>item in obj1?console.log(`first recursive letter is ${char}`):obj1[item]=1)
