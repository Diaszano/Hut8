// Segundo exercício
function categoria(idade){
    if(idade>=18){
        return "Adulto";
    }else if(idade >= 5){
        if(idade <= 7){
            return "Infantil A";
        }else if(idade <= 10){
            return "Infantil B";
        }else if(idade <= 13){
            return "Juvenil A";
        }else{
            return "Juvenil";
        }
    }else{
        return "Categoria indisponível";
    }
}

console.log(`Idade: 04 - categoria: ${categoria(4)}`);
console.log(`Idade: 05 - categoria: ${categoria(5)}`);
console.log(`Idade: 09 - categoria: ${categoria(9)}`);
console.log(`Idade: 12 - categoria: ${categoria(12)}`);
console.log(`Idade: 16 - categoria: ${categoria(16)}`);
console.log(`Idade: 21 - categoria: ${categoria(21)}`);
console.log(`Idade: 89 - categoria: ${categoria(89)}`);