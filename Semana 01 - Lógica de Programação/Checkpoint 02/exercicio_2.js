// Segundo exercício
function isPositive(number){
    if(number>=0){
        return true;
    }
    return false;
}

function existPositive(num_1,num_2){
    if(isPositive(num_1) || isPositive(num_2)){
        if(isPositive(num_1) && isPositive(num_2)){
            console.log("Os valores são positivos.");
        }else{
            console.log("Existe um valor positivo.");
        }
    }else{
        console.log("Os valores são negativos.");
    }
}

existPositive(0,1);
existPositive(-1,1);
existPositive(-1,-1);