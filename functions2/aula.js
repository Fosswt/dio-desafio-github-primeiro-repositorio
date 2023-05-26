function incrementarJuros(valor, taxa){
    const valorDeAcrescimo = (taxa/100) * valor
    return valorDeAcrescimo
}
function juros(valorPago, taxa, parceladoVzs){
    let valorPorMes = (valorPago / parceladoVzs) + valorPago * (taxa/100) 
    return valorPorMes
}

console.log(juros(1000, 10, 5))