const {gets, print} = require("./funcoes") //importando funções!
const numerosSorteados = []

for(let i = 0; i < 5; i++){
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
}
function achaMaior(array){
    let maior = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

function achaMenor(array){
    let menor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}
print(numerosSorteados)
print(achaMaior(numerosSorteados))
print(achaMenor(numerosSorteados))

module.exports = {
    achaMaior, achaMenor
}