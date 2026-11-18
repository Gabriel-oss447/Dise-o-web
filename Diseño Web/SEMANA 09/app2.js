class Animal {
    nombre;

    sonido(){
        return
    }
}

class Perro extends Animal {
    sonido(){
        let mensaje = "Guau Guau"
        return mensaje
    }
    correr(){
        let mensaje = "Corriendo"
        return mensaje
    }
}

class Gato extends Animal {
    sonido(){
        let mensaje = "Miau Miau"
        return mensaje
    }
    dormir(){
        let mensaje = "Durmiendo"
        return mensaje
    }
}

const gatito = new Perro()
const perrito = new Gato()
console.log(gatito.sonido())
console.log(perrito.sonido())