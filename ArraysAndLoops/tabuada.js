// crie uma função que dado um numero, retorne a sua tabuada
function tabuada(numero){
    console.log("------------------------------")
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`)
    }
    console.log("------------------------------")
}
tabuada(3)
tabuada(29)