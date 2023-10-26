const http = require('http')
//Importar la configuracion del sistema
const config = require('./config')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //El mensaje de salida final
    fs.readFile('index.html', 'utf8', (error, resultado) => {
        if (error) {
            //Si ocurre algun error, se va a poder ver el error consola
            console.log(`Ocurrio el error: ${error}`)
            //Lo que si es visible para el usuario es la respuesta final con .end
            res.writeHead(500, {'Content-Type': 'text/html'})
            res.end('<h1>Error 500. Error interno en el servidor</h1>')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(resultado)
    })
})

server.listen(config.port, config.host, () =>{
    console.log(`Ejecutando el servidor en: http://${config.host}:${config.port}`)
})