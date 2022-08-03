function toString(users){
    var retorno = "";
    for (const  user of users) {
        retorno += `Nome: ${user.name}\n`;
        retorno += "Suas habilidades:\n"
        for (const skill of user.skills) {
            retorno += `  ${skill}\n`;
        }
        retorno += "\n" 
    }
    return retorno;
}


const users = [
    {name: "Joao",skills: ["Javascript", "ReactJS", "Redux"]},
    {name: "Lucas",skills: ["Python","C","SQL","Javascript"]},
    {name: "Pedro",skills: ["VueJS", "Ruby on Rails", "Elixir"]}
]


console.log(toString(users));