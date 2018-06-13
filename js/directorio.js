function capturaDatos () {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let fechaNacimiento = document.getElementById('fecha-nacimiento').value
    let calle = document.getElementById('calle').value
    let numero = document.getElementById('numero').value
    let tarjetitas = document.getElementById("tarjetitas")
    let nuevaTarjetita = document.createElement("div")
    nuevaTarjetita.innerHTML = `
        <h1>${nombre + " " + apellido.slice(0,1)}.</h1>
        <p>${fechaNacimiento}</p>
        <p>${calle + "" + numero}</p>
    `
    tarjetitas.appendChild(nuevaTarjetita)
    document.getElementById('nombre').value = ""
document.getElementById('apellido').value = ""
document.getElementById('fecha-nacimiento').value = ""
document.getElementById('calle').value = ""
document.getElementById('numero').value = ""
}