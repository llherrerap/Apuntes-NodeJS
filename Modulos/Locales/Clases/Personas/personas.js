//Crear una clase Persona que tenga los siguientes atributos:
//Nombre, edad, apellido, correo, telefono, pasatiempos
//Tambien que tenga un metodo que sea saludar en donde muestre un saludo que diga
//Hola, mi nombre es ${nombre} y puedes hablarme al correo ${correo}

//La idea principal es poder exportar esta clase persona y utilizarla en
//nuestra app principal que es app.js importando la clase

class Persona {
    constructor(nombre, apellido, edad, contacto, pasatiempos){
        this.nombre= nombre
        this.apellido=apellido
        this.edad=edad
        this.contacto=contacto
        this.pasatiempos=pasatiempos
    }
    saludar(){
        return `Hola, mi nombre es ${this.nombre} y puedes hablarme al correo ${this.contacto.correo}`
    }
}

module.exports = {
    Persona
}