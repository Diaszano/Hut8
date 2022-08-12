// Primeiro exercício
const soma = (number_1,number_2) => {
    return number_1 + number_2;
}

const subtrai = (number_1,number_2) => {
    return number_1 - number_2;
}

const divide = (number_1,number_2) => {
    return number_1 / number_2;
}

const multiplica = (number_1,number_2) => {
    return number_1 * number_2;
}

const operacoes = function(name,number_1,number_2){
    switch(name){
        case 'soma':
            return soma(number_1,number_2);
        case 'subtrai':
            return subtrai(number_1,number_2);
        case 'divide':
            return divide(number_1,number_2);
        case 'multiplica':
            return divide(number_1,number_2);
        default:
            throw new Error(`O tipo "${name}" não é disponível!`);
    }
}

console.log(`O valor da soma de 3 + 5 é: ${operacoes('soma',3,5)}`);