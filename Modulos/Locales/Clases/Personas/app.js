//Importando
const clases = require('./personas')
const liliana = new clases.Persona(
    'Liliana', 
    'Herrera', 
    32, 
    {
        correo: 'liliana@gmail.com',
        telefono: 321469752
    },
    ['Pintar', 'Programar', 'Dormir'])

console.log(liliana)
console.log(liliana.saludar())