//função que recebe um array por parametro e devolve todos os numeros pares
function AllEvens(array){
    console.log(`imprimindo os números pares do array.`)
    array.forEach(element => {
        if(element % 2 == 0){
            console.log(element)
        }
    });
}
function AllOdds(array){
    console.log(`imprimindo os números ímpares do array.`)
    array.forEach(element => {
        if(element % 2 !== 0){
            console.log(element)
        }
    });
}
let arraynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
AllEvens(arraynums)
AllOdds(arraynums)