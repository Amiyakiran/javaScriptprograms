accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`Total number of accounts is : ${accounts.length}`);
console.log('-------------');
//2. print account number whose ac_type is savings
console.log('account number whose ac_type is savings');
accounts.filter(data=>data.ac_type=='savings').forEach(item =>console.log(item.acno));
console.log('-------------');

//3.print the balance of accnount number 1000
console.log('balance of accnount number 1000');
console.log(accounts.find(data=>data.acno==1000).balance);
console.log('-------------');

//4. print all gpay transactions
console.log('all gpay transactions');
accounts.map(data=>data.transaction).flat().filter(data1=>data1.mode=='gpay').forEach(item=>console.log(item))
console.log('-------------');

//5. print all transaction whose amount > 5000
console.log('all transaction whose amount > 5000');
accounts.map(data=>data.transaction).flat().filter(data1=>data1.amount>5000).forEach(item=>console.log(item))
console.log('-------------');

//6. print credit transaction of account 1002
console.log('credit transaction of account 1002');
credtra=accounts.map(data=>data.transaction).flat().filter(data1=>data1.to==1002)
console.log(credtra);
console.log('-------------');

//7. print debit transaction of account 1002
console.log('debit transaction of account 1002');
debtra= accounts.find(data=>data.acno==1002).transaction
console.log(debtra);
console.log('-------------');

//8. print transaction history of 1002
console.log('transaction history of 1002');
transhis={
    credit:credtra,
    debit:debtra
}
console.log(transhis);
console.log('-------------');

//print as array
console.log('transaction history of 1002 as array');
transhis1=[...credtra, ...debtra] //spread operator - it convert two different arrays into a single array 
console.log(transhis1);
console.log('-------------');

//9. print highest balance account details
console.log('highest balance account details');
highest= accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
console.log(highest);
console.log('-------------');
