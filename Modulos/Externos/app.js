//Importar modulos lodash
const {sortBy, uniq} = require('lodash')

const numeros = [8, 10, 7, 6, 5, 8, 1, 6, 12]

//Ordenando el arreglo con sortBy
console.log(sortBy(numeros))
console.log(uniq(numeros))
console.log(sortBy(uniq(numeros)))