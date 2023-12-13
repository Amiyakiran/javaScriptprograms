class Bank{
    accountDetails={
        1000:{acno:1000, username:"userone", password:"userone", balance:50000},
        1001:{acno:1001, username:"usertwo", password:"usertwo", balance:5000},
        1002:{acno:1002, username:"userthree", password:"userthree", balance:10000},
        1003:{acno:1003, username:"userfour", password:"userfour", balance:6000},
    }

    //method for validate given account number
      validateAccount(acno){
          return  acno in this.accountDetails?true:false
      }
    //method for authenticate a account
    authenticateAccount(acno,pswd){
            if(this.validateAccount(acno)){
                if(this.accountDetails[acno].password==pswd){
                    console.log('authentication successfull');
                }
                else{
                    console.log('invalid password');
                }
            }
            else{
                console.log('invalid account');
            }
    }
   
    //method for balance enquiry
    getBalance(acno,pswd){
        if(this.validateAccount(acno)){
                if(this.accountDetails[acno].password==pswd){
                    console.log(`Account balance of ${acno} is ${this.accountDetails[acno].balance}`);
                }
                else{
                    console.log('invalid password');
                }
        }
        else{
            console.log('invalid account');
        }

    }

    //method for fund transfer 

    fundTransfer(fromacno,toacno,amount){
        if(this.validateAccount(fromacno) && this.validateAccount(toacno)){
            if(this.accountDetails[fromacno].balance>=amount){
                console.log(` current balance of ${fromacno} is ${this.accountDetails[fromacno].balance} \n current balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log(` final  balance of ${fromacno} is ${this.accountDetails[fromacno].balance} \n final balance of ${toacno} is ${this.accountDetails[toacno].balance}`);
            }
            else{
                console.log('insufficient balance');
            }
        }
        else{
            console.log('invalid account numbers');
        }
    }
}

//objects
const user1 = new Bank()
console.log( user1.validateAccount(1000)?'account avaliable':'not available')
console.log('--------------------------');

user1.authenticateAccount(1000,'usrone')


console.log('--------------------------');
user1.getBalance(1000,'userone')
console.log('--------------------------');

user1.fundTransfer(1000,1001,1000)

console.log('--------------------------');
