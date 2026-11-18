//1.Definicion de Variable y Constante
let nombre = "Gabriel"  // declaramos un variable 
const valorPi = 3.1314 // esto es una constante 

console.log(nombre)     // mostramos la variable
console.log(valorPi)

//Ejemplo Uno
let primerNumero  = 20
let segundoNumero = 40
let resultado = 0

resultado =  parseInt(primerNumero.toString()) + parseInt(segundoNumero.toString())

console.log(resultado)


//Estructuras condicionales
//1.Condicional simple
let edad = 24
if (edad >= 18){
    console.log("Eres mayor de edad")
}

//2.Condicional compuesta
if (edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

//3.Condicional multiple
let fruta = ("manzana").toUpperCase()
switch (fruta) {
    case "PERA":
        console.log("Es una pera")
        break;
    case "UVA":
        console.log("Es una uva")
        break;
    case "FRESA":
        console.log("Es una fresa")
        break;
    default:
        console.log("No es una fruta válida")
        break;
}

//Ejemplo Dos
let edad1 = 20
let altura = 1.75

if (edad1 >= 18 && altura >= 1.70){
    console.log("Eres mayor de edad y mides más de 1.70 metros")
}else if (edad1 >= 18 && altura < 1.70){
    console.log("Eres mayor de edad pero mides menos de 1.70 metros")
}else if (edad1 < 18 && altura >= 1.70){
    console.log("Eres menor de edad pero mides más de 1.70 metros")
}

//Ejemplo Tres - Tipos de "="
let numero1 = 20

//"="Es para asignar un valor a una variable
//"=="Es para comparar si dos valores son iguales
//"==="Es para comparar si dos valores y su tipo de dato son iguales

if (numero1 == 20){
    console.log("El número es igual a 20")
}else{
    console.log("El número no es igual a 20")
}

//4.Condicional Ternario

let edad2 = 20
let resultado2 = edad2 >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

//Repetitivas
//1.While
let contador = 1
while (contador <= 20){
    console.log(contador)
    if (contador === 5){
        break;
    }
    contador++
}

//2.Arrays
let frutas=['Manzana', 'Uva','Pera']
/*
frutas.push("naranja")
frutas.pop()
*/
frutas.push('Fresa') //Agregar un elemento al array
for(f in frutas){
    console.log(frutas[f])
}
frutas.pop() // Eliminar el ultimo elemnto del array

console.log('******************************************')
for(f in frutas){
    console.log(frutas[f])
}
console.log('******************************************')
let frutas2 = frutas.filter((f) => f !=='Uva')
console.log(frutas2)
console.log(frutas)
console.log('******************************************')
let frutas3 =[... frutas,'12']
console.log(frutas3)

//Funciones
//Declaración de Función
function suma(a, b){
    return a + b
}

//Ejemplo de Función
//1.Función Declarativa
//1.1 Guardando el resultado en una variable
let resultadoSuma = suma(10, 20)
console.log(resultadoSuma)
//1.2 Mostrando el resultado directamente en consola
console.log(suma(10, 20))

//2.Funcion Expresion
let resultado1 = function(a, b){
    return a + b
}
//Los valorres de 10 y 20 de remplazan en los parametros a y b de la funcion
console.log(resultado1(10, 20))

//3.Funcion Flecha (Arrow Function)
let resultado3 = (a, b) => {
    return a + b
}
console.log(resultado3(10, 20))

//Objetos de datos
let persona = {
    nombre: "Gabriel",
    apellido: "Balbin",
    edad: 24,
}

console.log(persona)
