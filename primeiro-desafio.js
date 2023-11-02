
/* Faça um programa para calcular o valor de uma viagem.

Voçê terá 3 variáveis. Sendo elas:
1 - Preço do combustivel:
2 - Gatos médio de combustível do carro por KM;
3 - Distãncia em KM de viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);


