console.log(`Trabalhando com condicionais`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const temPassagemComprada = true;
const estaAcompanhada = true;
const idadeComprador = 21;
console.log("Destinos possiveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem!!!");
    listaDeDestinos.splice(1, 1); // Removendo item
} else {
    console.log("Não é maior de idade e não vender");
}

console.log("Embarque: \n\n")
if((idadeComprador >= 18 || estaAcompanhada == true) && temPassagemComprada == true){
    console.log("Boa Viagem!")
}else{
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

