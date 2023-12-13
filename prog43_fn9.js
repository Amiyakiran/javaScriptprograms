//w.a.p to check the given mail id is gmail or not

const mail = (email)=>{
    return email.endsWith('@gmail.com')?`${email} is a valid gmail id`:`${email} is not a valid gmail id`
}

console.log(mail('luminar@gmai.com'));

//w.a.p to check whether a word starts with the letter q

const word =(w)=>{
    return w.startsWith('q')|| w.startsWith('Q')?`${w} starts with with Q`:`${w} starts with with Q`
}

console.log(word('Qhjdbvjfu'));