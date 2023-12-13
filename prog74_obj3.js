var car ={
    name:"boleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and its manufacturer name and price
console.log(` car: ${car.name} \n manufacturer name : ${car.manufacturer} \n price is: ${car.price}`);
console.log('--------------------------------');
//check model key is available in car, if yes then display its value
console.log("model" in car?`car model is : ${car.model}`:'key not available');
console.log('--------------------------------');

//add "varient" key to car with value as "manuel"
console.log(car);
car.varient=["manuel"]
console.log(car);
console.log('--------------------------------');

//insert another value to "varient" key to car with value as "automatic"
car.varient.push("automatic")
console.log(car);
console.log('--------------------------------');

//add "colour" key to car with value as "red","white","blue" 
car.colour=["red","white","blue" ]
console.log(car);
console.log('--------------------------------');
