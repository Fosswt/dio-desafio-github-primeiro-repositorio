function falaMermao(name){
    console.log("FAAAAALAA MERMAO, vc ta bao "+name+"??")
}
falaMermao("fonsaca") //invoke
function noParameter(){
    console.log("sem parametros irmao")
}
function withParameter(parameter){
    console.log(`parameter: ${parameter}`)
}
function throwNumber(number, number2){
    return number+number2
}
var oi = throwNumber(55,89) + 10
console.log(oi)
//funções que não devolvem nada: procedimentos 
function quadrado(number){
    return number * number
}
console.log(quadrado(4))
function pow(number, pow){
    
    let result = 0
    if(pow == 0){
        return 1
    }
    else{
        for(let i = 1; i < pow; i++){
            //multiplicar number por ele mesmo (pow) vezes
            //
        }
        return result
    }
    
}
let oii = pow(5, 2)
console.log(oii)