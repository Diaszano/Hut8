function checkVazio(str){
    return str != '';
}

function length_palavras(frase){
    var contador = frase.split(/\s/);
    contador = contador.filter(checkVazio);
    return contador.length;
}

console.log(`${length_palavras("Lucas 09 ${} Dias\nDos \t Santos 21")}`);
