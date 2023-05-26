// elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo
/*
FORMULA: IMC = PESO / (ALTURA*ALTURA) 
abaixo de 18.5 = abaixo do peso
entre 18.5 e 25 = peso normal
entre 25 e 30 = acima do peso
entre 30 e 40 = obeso
acima de 40 = obesidade grave
*/

function CalculaIMC(peso, altura){
    //insira a altura em CENTIMETROS
    let alturaMetros = altura / 100
    imc = peso / (alturaMetros*alturaMetros)
    return imc
}
function classificarIMC(imc){
    if(imc < 18.5){
        console.log("abaixo do peso, imc = "+imc)
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("peso normal, imc = "+imc)
    }
    else if(imc >= 25 && imc < 30){
        console.log("acima do peso, imc = "+imc)
    }
    else if(imc >= 30 && imc < 40){
        console.log("obeso, imc = "+imc)
    }
    else{
        console.log("obesidade grave, imc = "+imc)
    }
}
imc1  = CalculaIMC(81, 183)
classificarIMC(imc1)
