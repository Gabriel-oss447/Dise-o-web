const FormularioRegistro = document.getElementById('formularioRegistro')
const registros = document.getElementById('registro')

// Se recuperan los datos guardados (si existen)
let listaPersonas = JSON.parse(localStorage.getItem('personas')) || []

FormularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    guardar()
})

// Función para guardar los datos del formulario en el localStorage
function guardar() {
    let nombre = document.getElementById('nombre').value
    let edad = parseInt(document.getElementById('edad').value)

    let persona = {
        'nombre': nombre,
        'edad': edad
    }

    listaPersonas.push(persona)
    localStorage.setItem('personas', JSON.stringify(listaPersonas))
    mostrar()
    limpiar()
}

// Función para mostrar los registros en la tabla
function mostrar() {
    registros.innerHTML = ''
    listaPersonas.forEach((p, i) => {
        registros.innerHTML += '<tr>' +
            '<td>' + i + '</td>' +
            '<td>' + p.nombre + '</td>' +
            '<td>' + p.edad + '</td>' +
            '</tr>'
    })
}

// Función para limpiar el formulario
function limpiar() {
    FormularioRegistro.reset()
}

mostrar()