const FormularioActualizar= document.getElementById('formularioActualizar')
const FormularioEliminar= document.getElementById('FormularioEliminar')
let listaPersona= JSON.parse(localStorage.getItem('personas')) || []
FormularioActualizar.addEventListener('submit',(_)=>{
    actualizar()
})
FormularioEliminar.addEventListener('submit',(e)=>{
    e.preventDefault()
    eliminar()
})
function actualizar(){
    let posicion = parseInt(document.getElementById('posicion').value)
    let nombre = document.getElementById('nombre').value
    let edad = parseInt(document.getElementById('edad').value)
    listaPersona.forEach((p,i) => {
        if(i===posicion){
            p.nombre=nombre
            p.edad=edad
        }
    });
    localStorage.setItem('personas',JSON.stringify(listaPersona))
  
}
function eliminar(){
    let posicion= parseInt(document.getElementById('posicionEliminar').value)
    listaPersona = listaPersona.filter((_,i)=> posicion !== i)
   localStorage.setItem('personas',JSON.stringify(listaPersona))
}