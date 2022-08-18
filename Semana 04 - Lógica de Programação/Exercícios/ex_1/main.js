var nomes = "Maria, Paulo, Moisés, Joel, Ana";
listaNomes = nomes.split(",");

console.log("---------------");
console.log("Primeiro modo");
console.log("---------------");
for (const nome of listaNomes) {
    console.log(nome.trim());
}
console.log("---------------");
console.log("Segundo modo");
console.log("---------------");
for (const i in listaNomes) {
    console.log(`${parseInt(i)+1}º nome: ${listaNomes[i].trim()}`);
}
console.log("---------------");
console.log("Terceiro modo");
console.log("---------------");
listaNomes.forEach(nome => {
    console.log(nome.trim());
});
console.log("---------------");