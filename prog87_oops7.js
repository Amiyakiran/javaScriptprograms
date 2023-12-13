//method overloading - javascript dosent support method overloading - always execute the last method

class A{
    methoda(){
        console.log('first method');
    }
    methoda(n){
        this.n1=n
        console.log(`inside second method ${this.n1}`);
    }
}

const obj = new A()

obj.methoda() //first method'

obj.methoda(5) //inside second method ${this.n1}

