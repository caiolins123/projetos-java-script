console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando cidade na lista

console.log("Destinos possiveis:");
conseole.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //primeiro voce fala a posição do valor que vc quer deletar lembrando que começa em 0 e depois voce coloca quantos valores vc quer retirar

console.log(listaDeDestinos[1], listaDeDestinos[0]); //é possível puxar da lista apenas um valor específico presente nela com o [] onde dentro dele é indicada a posição do que eu quero mostrar

