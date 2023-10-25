//Importando clases
const clases = require('./animales')

const perro = new clases.Animal('Lulu', 5)
console.log(perro)
console.log(perro.saludar())

const gato = new clases.Gato('Paco', 9, 7)
console.log(gato)
console.log(gato.hablar())