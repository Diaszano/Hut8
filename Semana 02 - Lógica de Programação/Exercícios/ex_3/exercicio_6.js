
function rockPaperScissorsWinner(number_1,number_2){
    if(number_1==number_2){
        return "Empate";
    }
    var soma = number_1 + number_2;
    // Tesoura == 0
    // Papel == 1
    // Pedra == 2
    if(soma == 1){
        return number_1 == 0 ? "Pessoa 1 ganhou" : "Pessoa 2 ganhou";
    }else if(soma == 2){
        return number_1 == 0 ? "Pessoa 2 ganhou" : "Pessoa 1 ganhou";
    }
    return number_1 == 1 ? "Pessoa 1 ganhou" : "Pessoa 2 ganhou";
}

function aleatorio(){
    return Math.floor(3 * Math.random());
}

function getName(number){
    switch(number){
        case 0:
            return "Tesoura";
        case 1:
            return "Papel";
        case 2:
            return "Pedra";
        default:
            console.error("Number not exist");
    }
}

for(var i = 0; i < 10; i++){
    var pessoa1 = aleatorio();
    var pessoa2 = aleatorio();
    var texto = `Pessoa 1 tem ${getName(pessoa1)}\n`;
    texto += `Pessoa 2 tem ${getName(pessoa2)}\n`;
    texto += `${rockPaperScissorsWinner(pessoa1,pessoa2)}`;
    console.log("-------------------------------");
    console.log(texto);
    console.log("-------------------------------");
}
