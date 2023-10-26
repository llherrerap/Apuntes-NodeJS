//Importamos los modulos necesarios
const mysql = require('mysql')
const config = require('./config')

//Creando la conexion con el metodo createConnection
const conexion = mysql.createConnection({
    //Establece los parametros para la conexion
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

//Connet permite conectar a la base de datos
conexion.connect((error) => {
    if (error) {
        console.log(`Ha ocurrido un error en la base de datos: ${error}`)
        return;
    } else {
        console.log("Conexion exitosa en la base de datos")
    }

    //end permite cerrar esta conexion a la base datos
    conexion.end((error) => {
        if (error) {
            console.log('No se pudo cerrar la conexion')
        } else{
            console.log('Conexion cerrada :)')
        }
    })
})