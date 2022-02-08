console.log(`\n Trabalhando com loops`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let temPassagemComprada = false;
const estaAcompanhada = true;
const idadeComprador = 21;
const destino = "Salvador";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar  = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;  
}

for(let cont = 0; cont < 3 ; cont ++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }  
}


console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro ")
}