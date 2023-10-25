//Crear la funcion que deseamos exportar

const saludo = function (nombre) {
    return `Buenas noches ${nombre}! Este es mi primer modulo con funciones`
}

const despedir = function(nombre){
    return `Adios ${nombre}. Gracias por usar la app`
}

//Exportar la funcion
module.exports = {
    saludo: saludo,
    despedir: despedir
}