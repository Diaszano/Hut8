function somador(array){
    var soma = 0;
    for(let i = 0; i < array.length;i++){
        soma += array[i] * i;
    }
    return soma;
}


var array1 = [1,2,3,4,5,6,7,8,9.5,10];
var array2 = [5, 9, 10, 6];

console.log(somador(array1));
console.log(somador(array2));