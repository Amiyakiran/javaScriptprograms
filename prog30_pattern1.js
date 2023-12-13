//nested loop -----loop within a loop

//w.a.p to print the given pattern

//  #  #  #  #
//  #  #  #  #
//  #  #  #  #
//  #  #  #  #


for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str= str+' #'
    }
    console.log(str);
}