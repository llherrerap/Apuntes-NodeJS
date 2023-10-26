//Importar el modulo interno HTTP
const http = require('http')

//crear nuestro servidor
//req => solicitud
//res => respuesta
const server = http.createServer((req, res) => {
    //El metodo end define una respuesta final dada del servidor al cliente
    res.end('Hola! Este es mi primer servidor :)')
})
//Se define el puerto de salida del servidor
const puerto = 3000;
//Iniciar el servidor
server.listen(puerto, ()=>{
    console.log(`El servidor se esta ejecutando por: http://localhost:${puerto}`)
})

