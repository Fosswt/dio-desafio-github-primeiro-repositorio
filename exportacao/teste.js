//testando função de achar menor e achar maior, exportando ela de outro arquivo.

const {achaMaior, achaMenor} = require("./main")

let array = [-23, 44, 65, 10, 12, 1212, -7123, 5123, 555, 1213, 33333, 654323, -90381, 098, 3, 03]

console.log(achaMaior(array))
console.log(achaMenor(array))