//Importar modulos
const http = require('http')
const fs = require('fs')

//Crear el servidor con el metodo createServer
const server = http.createServer((req, res) => {
    //Leer el archivo index.html
    fs.readFile('index.html', 'utf8', (error, data) => {
        //si ocurre algun error
        if (error) {
            //La respuesta del servidor va a ser una respuesta 500
            res.writeHead(500, {'Content-Type': 'text/html'})
            //Definimos la respuesta final con el metodo end
            res.end('<h1>Error 500. Se presento un error en el servidor :(</h1>')
        }
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(data)
    })
})

//Se define el puerto de salida del servidor
const puerto = 3000;
//Iniciar el servidor
server.listen(puerto, ()=>{
    console.log(`El servidor se esta ejecutando por: http://localhost:${puerto}`)
    // Para cerrar el puerto utilizan ctrl c
})
