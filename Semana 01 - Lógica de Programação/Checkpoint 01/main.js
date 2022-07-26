// Primeiro exercício
// Funções
// Calculo de média
function media(nota1,nota2){
    var nota_media = (nota1+nota2) / 2;
    return nota_media;
}
// Pegar a idade da pessoa
function get_idade(dia,mes,ano){
    const nova_data  = new Date(Date.now());
    const velha_data = new Date(`${mes}/${dia}/${ano}`);
    
    var diff  = nova_data - velha_data;
    diff     /= (1000 * 60 * 60 * 24);
    diff      = Math.ceil(diff / 365);
    return diff;
}
// Variáveis
// Nome
var nome          = "Lucas";
var sobrenome     = "Dias dos Santos";
var nome_completo = `${nome} ${sobrenome}`;
// Data de nascimento
var dia_nascimento = 21;
var mes_nascimento = 09;
var ano_nascimento = 2001;
var idade          = get_idade(
    dia=dia_nascimento,
    mes=mes_nascimento,
    ano=ano_nascimento
);
var data_nascimento = `${dia_nascimento}/${mes_nascimento}/${ano_nascimento}`;
// Notas
var primeira_nota = 8.5;
var segunda_nota  = 9.8;
var nota_media    = media(
    nota1=primeira_nota,
    nota2=segunda_nota
);
// Prints
console.log("---------------");
console.log(`Nome Completo: ${nome_completo}`);
console.log(`Idade: ${idade}`);
console.log(`Data de Nascimento: ${data_nascimento}`);
console.log(`Média: ${nota_media}`);
console.log("---------------");

// Segundo exercício
// Função
function somador(num_1,num_2,num_3){
    var soma_total = num_1 + num_2 + num_3;
    return soma_total;
}
// Variável
var resultado_soma = somador(5,10,15);
// Prints
console.log("---------------");
console.log(`Resultado da soma: ${resultado_soma}`);
console.log("---------------");