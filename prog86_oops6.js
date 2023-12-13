//multilevel inheritance

class A{
    methoda(){
        console.log('inside class A');
    }
}

class B extends A{
    methodb(){
        console.log('inside class B');
    }
}

class C extends B{
    methodc(){
        console.log('inside class c');
    }
}


const childc = new C

childc.methodc()
childc.methodb()
childc.methoda()