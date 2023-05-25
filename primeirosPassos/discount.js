/*
elaborar um algoritmo que calcula o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha do método de pagamento
a vista (debito) recebe 10% de desconto
a vista (no dinheiro ou pix) recebe 15% de desconto
em duas vezes, preço normal de etiqueta sem juros 
acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/
let produtoA = 159.90

function Debito(value){
    // como sera pago no debito, terá 10% de desconto
    let newPrice = value - (value * 0.10)
    console.log(`Preço original: ${value}; Preço com desconto (10%): ${newPrice}`)
}
function DinheiroPix(value){
    // como sera pago no debito, terá 10% de desconto
    let newPrice = value - (value * 0.15)
    console.log(`Preço original: ${value}; Preço com desconto (15%): ${newPrice}`)
}
function Parcela2Vezes(value){
    // como sera pago no debito, terá 10% de desconto
    console.log(`Preço a ser pago de cada parcela (Parcelado em 2x): ${produtoA/2}`)
}
function ParcelaAcima2Vezes(value, vezes){
    // como sera pago no debito, terá 10% de desconto
    if(vezes > 12){
        console.log("Impossível parcelar em mais de 12x!")
    }
    else{
        console.log(`Você gostaria de parcelar um produto que custa ${value} em ${vezes} vezes.`)
        let parcela = (value/vezes) + (value * 0.10) 
        console.log(`Preço original: ${value}; Preço de cada parcela (em ${vezes} vezes): ${parcela}`)
        console.log("Total : "+parcela * vezes)
    }
}
Debito(produtoA)
DinheiroPix(produtoA)
Parcela2Vezes(produtoA)
ParcelaAcima2Vezes(produtoA, 10)