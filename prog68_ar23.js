//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('------------------------');
console.log('district having Highest +ve case ');
highestcase=covid_data.reduce((dis1,dis2)=>dis1[2]>dis2[2]?dis1:dis2)
console.log(highestcase[1]);
console.log('------------------------');

//2. district having Highest 1st dose vaccine
console.log('district having Highest 1st dose vaccine');
highestfristdose=covid_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)
console.log(highestfristdose[1]);
console.log('------------------------');

//3. district having lowest death rate
console.log('district having lowest death rate');
ldr=covid_data.reduce((dr1,dr2)=>dr1[3]<dr2[3]?dr1:dr2)
console.log(ldr[1]);
console.log('------------------------');
//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order:');
covid_data.sort((pocase1,pocase2)=>pocase2[2]-pocase1[2]).forEach(pocase => {console.log(pocase[1]);});
console.log('------------------------');

//5. is district with +ve cases > 15000
console.log('is district with +ve cases > 15000');
dis=covid_data.some(poscase=>poscase[2]>15000)
console.log(dis?'yes':'no');
console.log('------------------------');

//6. sort data with 1st dose vaccine ascending order
console.log('sort data with 1st dose vaccine:');
covid_data.sort((firstdose1,firstdose2)=>firstdose1[5]-firstdose2[5]).forEach(pocase => {console.log(pocase[1]);});
console.log('------------------------');
//7. Print Thrissur details
console.log('Thrissur details:');
thri=covid_data.find(dis=>dis[1]=='Thrissur')
console.log(thri);
console.log('------------------------');

//8. Print total number of positive cases
console.log('total number of positive cases:');
totalcase=covid_data.map(pocase=>pocase[2]).reduce((case1,cas2)=>case1+cas2)
console.log(totalcase);
console.log('------------------------');

//9. Print total number of curred cases
console.log('total number of positive cases:');
curredcase=covid_data.map(cucase=>cucase[4]).reduce((case1,cas2)=>case1+cas2)
console.log(curredcase);
console.log('------------------------');

//10. Print curred cases in Idukki
console.log('curred cases in Idukki:');
idukki=covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);
console.log('------------------------');
