//Crear la funcion que deseamos exportar

const saludo = function (nombre) {
    return `Hola ${nombre}! Este es mi primer modulo con funciones`
}

//Exportar la funcion
module.exports = {
    saludo: saludo
}