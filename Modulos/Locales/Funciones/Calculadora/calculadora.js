//Ejemplo de exportación de funciones
const sumar = function(a,b){
    return `La suma de ${a} + ${b} es igual a: ${a+b}`; 
}

//Exportación de modulos
module.exports = {
    sumar
}