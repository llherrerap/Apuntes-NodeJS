//Importar el modulo interno fs que permite gestionar archivos
const fs = require('fs')

fs.readFile('prueba.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)
})