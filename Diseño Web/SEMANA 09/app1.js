class Persona {
    //1.Atributos
    nombre;
    dni;
    edad;

    //2.Constructor
    //Ayuda a inicializar los atributos de la clase
    constructor(nombreP, dniP, edadP) {
        this.nombre = nombreP;
        this.dni = dniP;
        this.edad = edadP;
    }

    //3.Metodos
    comer () {
        //4.Variable
        let mensaje = "Comiendo"
        console.log(this.#dormir()) // llamamos al metodo privado dormir() dentro del metodo publico comer()
        return mensaje  
    }
    
    //Encapsulamiento
    //El "#" indica que el metodo es privado y solo puede ser llamado dentro de la clase

    #dormir () {
        let mensaje = "Durmiendo"
        return mensaje
    }   
}

//Instancia de la clase Persona
const personaUno = new Persona("Gabriel", "60334863", 24)
const personaDos = new Persona("María", "70445974", 25)
console.log(personaUno.comer())
console.log(personaDos.dormir())
console.log(personaUno.nombre)
console.log(personaDos.nombre)


