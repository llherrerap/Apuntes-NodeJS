//Creación de clases a exportar
class Animal {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad=edad
    }
    saludar(){
        return `Hola! Soy un animal y mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

class Gato extends Animal {
    constructor(nombre, edad, vidas){
        super(nombre, edad)
        this.vidas=vidas
    }
    hablar(){
        return `Miau miau`
    }
}

module.exports={
    Animal,
    Gato
}