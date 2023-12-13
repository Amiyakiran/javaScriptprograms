
class Landing{
    //property
    dataBase={
        "Milan":{username:"Milan",password:"12"},
        "Manu":{username:"Manu",password:"123"},
        "Priya":{username:"Priya",password:"1234"},
        "Anu":{username:"Anu",password:"12345"}
       
    }

    //method
    saveData(){
        if(this.dataBase){
           localStorage.setItem('database',JSON.stringify(this.dataBase))
        }
    }

    //getData from local storage
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))
    }

    //register
    register(){
        this.getData()
        let user = reguser.value
        let pswd = regpswd.value

        if(user=="" || pswd==""){
            alert('Please enter valid input')
        }
        else{
           if(user in this.dataBase){
            alert('User already exist')
           }
           else{
            this.dataBase[user]={username:user,password:pswd}
            console.log(this.dataBase);
            alert('successfully Registered')
            this.saveData()
            
            //navigate to login page
            window.location="login.html"
           }
        }

    } 

    //login
    login(){
        let user1=loguser.value
        console.log(user1);
        let pswd1=logpswd.value
        console.log(pswd1);

        //call stored database
        this.getData()
        if(user1 in this.dataBase){
          if(this.dataBase[user1].password==pswd1){
            //to store username into local storage
           localStorage.setItem("user",user1)
            alert('login Successful')
            //store username in the local storage
            localStorage.setItem("user",user1)

            //navigate
            window.location="home.html"
          }
          else{
            alert('Invalid username or password')
          }
        }
        else{
            alert('user Doesnot exist')
        }
    }

}

//object
const obj = new Landing()
obj.getData()


