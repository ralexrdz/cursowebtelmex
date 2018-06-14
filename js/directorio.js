console.log("asd")

function agregarADirectorio () {
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let fechaNacimiento = document.getElementById('fecha-nacimiento').value
    let calle = document.getElementById('calle').value
    let numero = document.getElementById('numero').value
    
    let arregloTelefonos = []
    let telefonos = [...document.getElementById("telefonos").children]
    telefonos.forEach(function (telefono, index) {
        arregloTelefonos.push(telefono.children[1].value)
        // arregloTelefonos.push(telefono)
    })
    console.log(arregloTelefonos)

    let tarjetitas = document.getElementById("tarjetitas")
    let nuevaTarjetita = document.createElement("div")
    arregloTelefonos = arregloTelefonos.map(function (tel) {
        return `<li>${tel}</li>`
    })
    nuevaTarjetita.innerHTML = `
        <h1>${nombre + " " + apellido.slice(0,1)}.</h1>
        <p>${fechaNacimiento}</p>
        <p>${calle + " " + numero}</p>
        <ul>
            ${arregloTelefonos.join('')}
        </ul>
    `
    tarjetitas.appendChild(nuevaTarjetita)
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('fecha-nacimiento').value = ""
    document.getElementById('calle').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('telefonos').innerHTML = '<div><label for="tel1">Telefono 1</label><input type="text" id="tel1"></div>'
    
}

function nuevoCampoTel () {
    let telefonos = document.getElementById("telefonos")
    let numTelefonos = telefonos.children.length
    let div = document.createElement("div")
    div.innerHTML = `<label for="tel${numTelefonos + 1}">Telefono ${numTelefonos + 1}</label><input type="text" id="tel${numTelefonos + 1}">`
    telefonos.appendChild(div)
}