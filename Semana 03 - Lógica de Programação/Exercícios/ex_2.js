// Segundo exercício
const validador = (idade) => idade >= 18 ?'maior':'menor';

function printUser(user){
    console.log(`O ${user.name} é ${validador(user.idade)} de idade.`)
}

user = { 
    name: 'Lucas', 
    idade: 21 
};

printUser(user);