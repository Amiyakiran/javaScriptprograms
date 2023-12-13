//method overridding

class A{
    methoda(){
        console.log('parent class');
    }
}

class B extends A{
    methoda(){
        console.log('child class');
    }
    methoda(){
        console.log('child1 class');
    }
}

const obj = new B
obj.methoda()