//array method - splice to add  or remove

a=['max','miller','mini','manu']

//remove mini from the array
//array.splice(index,howmany items)
a.splice(2,1)
console.log(a);

//remove mini and manu from the array
a=['max','miller','mini','manu']

a.splice(2,2)
console.log(a);

//add maxwell as third item
a=['max','miller','mini','manu']
a.splice(2,0,'maxwell')
console.log(a);

a=['max','miller','mini','manu']
a.splice(0,1)
console.log(a);