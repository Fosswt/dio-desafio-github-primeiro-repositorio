
const vini = {
    nome: "vinicius",
    idade: 20,
    comidaPreferida: "churras"
}

const alunos = ["vini", "relis", "eve"];
console.log(alunos)


alunos.push("ze da manga")
console.log("usando foreach")
alunos.forEach(element => {
    console.log(element)
});

console.log("usando for simplificado para objetos")
for(let i of alunos){
    console.log(i)
}
alunos.push(10)

console.log(alunos)
console.log("elemento retirado: "+alunos.pop()) //pop tira o ultimo elemento, shift tira o primeiro elemento.
console.log(alunos)

const notas = []
notas.push(5)
notas.push(8)
notas.push(3)
notas.push(10)
notas.push(9)
notas.push(7)
let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5])/ notas.length //jeito burro de se fazer a media
console.log(`a média das notas é de: ${media}`)

function calculaMedia(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    let media = soma/array.length
    return media
}
console.log(calculaMedia(notas))
for(let f = 0; f <= 100; f += 2){
    console.log(f)
}

