weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}


//create an object
wd={}


for(let data of weatherData){
    // data= {district:'Kottayam',weather:30},
    district=data.district
    
    currtemp=data.weather
   
    if(district in wd){
        oldtemp=wd[district]//32 //29
        if(oldtemp>currtemp){//32>29 //29<30
            wd[district]=oldtemp
        }
        else{
            wd[district]=currtemp
        }

    }
    else{
        wd[district]=currtemp //thrisur:32 //Kottayam:29 //Palakkad:34//Ernakulam:33
    }


}
console.log(wd);