//object inheritance

baleno={
    model:'hatch back',
    varient:['automatic','manual'],
    manufacturer:'maruti'
}

glanza={
    manufacturer:'Toyota'
}

//childclassname.__proto__ = parent class
glanza. __proto__ = baleno

console.log(glanza.model);