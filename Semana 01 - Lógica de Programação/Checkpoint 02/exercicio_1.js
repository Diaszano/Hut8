// Primeiro exercício
function isPositive(number){
    if(number>=0){
        return true;
    }
    return false;
}

function positivo_ou_negativo(number){
    if(isPositive(number)){
        console.log("Positivo");
    }else{
        console.log("Negativo");
    }
}

positivo_ou_negativo(15);
positivo_ou_negativo(-15);
positivo_ou_negativo(0);