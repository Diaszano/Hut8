function maior_numero(array){
    var maior = 0;
    for(var i = 0; i < array.length; i++){
        if(i == 0){
            maior = array[i];
        }
        if(maior < array[i]){
            maior = array[i];
        }
    }
    return maior;
}

function menor_numero(array){
    var menor = 0;
    for(var i = 0; i < array.length; i++){
        if(i == 0){
            menor = array[i];
        }
        if(menor > array[i]){
            menor = array[i];
        }
    }
    return menor;
}

var array = [21, -15, 19, 45, -89, 68, 96, 15, -125];

console.log(`Maior numero: ${maior_numero(array)}`)
console.log(`Menor numero: ${menor_numero(array)}`)