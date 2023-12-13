products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log('product name only');
/* for(let item of products){
    console.log(item.pName);
} */
products.map(data=>data['pName']).forEach( items=>console.log(items));
console.log('-----------------------');

//2. print all mobile details whose display is lcd
console.log(' all mobile details whose display is lcd');
/* for(let item of products){
    display=item.display
    if(display=='lcd')
    console.log(item);
}
 */
products.filter(data=>data.display=='lcd').forEach(item=>console.log(item))
console.log('-----------------------');

//3. print 5g mobile phone name
console.log('5g mobile phone name');
/* for(let item of products){
    band=item.band
    if(band=='5g'){
        console.log(item.pName);
    }
} */
products.filter(data=>data.band=='5g').forEach(item=>console.log(item.pName))
console.log('-----------------------');

//4. sort mobile based on price
console.log('sort mobile based on price');
products.sort((data1,data2)=>data1.price-data2.price).forEach(item=>console.log(item.pName))
console.log('-----------------------');

//5. print costly mobile
console.log('costly mobile');
costlyproduct=products.reduce((data1,data2)=>data1.price>data2.price?data1:data2)
console.log(costlyproduct.pName);
console.log('-----------------------');

//6. print low cost mobile
console.log('low cost mobile');
cheapproduct=products.reduce((data1,data2)=>data1.price<data2.price?data1:data2)
console.log(cheapproduct.pName);
console.log('-----------------------');