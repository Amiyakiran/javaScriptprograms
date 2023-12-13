//w.a.p to check whether a given number is a mobile number or not

const validatemobile = (mobile)=>{
    return mobile.length==10?`${mobile} is a valid mobile number`:`${mobile} is not a valid mobile number`
}

console.log(validatemobile('9874561230'));



