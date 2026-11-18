const FormularioRegistro= document.getElementById('formularioRegistro')
const registros = document.getElementById('registro')

let listaPersonas = []
FormularioRegistro.addEventListener('submit',(e)=>{
    e.preventDefault()
   guardar()
})


//Funcion para guardar los datos del formulario en el localStorage
function guardar(){
    let nombre = document.getElementById('nombre').value
    let edad = parseInt(document.getElementById('edad').value)
    console.log('Guardando')
    //console.log(nombre)
    //console.log(edad)

    let persona = {
        'nombre': nombre,
        'edad': edad
    }
    //console.log(persona)

    listaPersonas.push(persona)
    localStorage.setItem('personas', JSON.stringify(listaPersonas))
    console.log(listaPersonas)
    mostrar()
    limpiar()
}

function mostrar(){
    resgistros.innerHTML = ''
    listaPersonas.forEach((p, i) => {
        registros.innerHTML += '<tr>' +
        '<td>' + i + '</td>' +
        '<td>' + p.nombre + '</td>' +
        '<td>' + p.edad + '</td>' +
        '</tr>'
    })
}

//Función para limpiar el formulario
function limpiar(){
    FormularioRegistro.requestFullscreen()

}

mostrar()