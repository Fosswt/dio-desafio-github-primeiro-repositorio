//diferença entre let e const
let variavel = 3
const pi = 3.14;
console.log("Hello World!")
console.log(variavel + 3)
console.log("slc")
console.log("agoa sim cara")
/*
Faça um programa para calcular o preço de uma viagem.
1 - preço do combustivel
2 - gasto médio de combustível do carro (km/l)
3 - distância em KM da viagem 
*/
let fuelPrice = 5.14
let fuelConsumption = 14
let travelDistance = 469

console.log(`Esse carro gastará ${(travelDistance/fuelConsumption)*fuelPrice} reais para fazer essa viagem de ${travelDistance} KM de distância.`)

let litrosConsumidos = travelDistance/fuelConsumption
let travelPrice = litrosConsumidos * fuelPrice
console.log("preço da viagem eh "+travelPrice)