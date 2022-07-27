// Terceiro exercício
function pagamento(valor,tipo){
    switch(tipo){
        case 1:
            var valor_total = valor - (valor*0.1);
            return valor_total;
        case 2:
            var valor_total = valor - (valor*0.15);
            return valor_total;
        case 3:
            return valor;
        case 4:
            var valor_total = valor + (valor*0.1);
            return valor_total;
        default:
            console.log('opção inválida');
            return 0;
    }
}


var valor_produto = 17.98;

console.log(
    `Valor do produto à vista em dinheiro: ${pagamento(valor_produto,1).toFixed(2)}`
);
console.log(
    `Valor do produto à vista no cartão de crédito: ${pagamento(valor_produto,2).toFixed(2)}`
);
console.log(
    `Valor do produto em duas vezes: ${pagamento(valor_produto,3).toFixed(2)}`
);
console.log(
    `Valor do produto em três vezes: ${pagamento(valor_produto,4).toFixed(2)}`
);
console.log(
    `Valor do produto tipo errado: ${pagamento(valor_produto,5).toFixed(2)}`
);
