console.log("asd")

$(cuandoCargue)

function cuandoCargue () {
    console.log("ya cargó el HTML JQuery")
}

function agregarADirectorio () {
    let formulario = document.getElementById("formulario")
    var obj = {};
    var elements = formulario.querySelectorAll( "input, select, textarea" );
    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        if( name ) {
            if (obj[name] === undefined) {
                obj[name] = value
            } else {
                if (Array.isArray(obj[name])) {
                    console.log(obj)
                    console.log(obj[name])
                    obj[name].push(value)
                } else {
                    obj[name] = [obj[name], value]
                }
            }
        }
    }
    console.log(obj)
    // let nombre = document.getElementById('nombre').value
    // let apellido = document.getElementById('apellido').value
    // let fechaNacimiento = document.getElementById('fecha-nacimiento').value
    // let calle = document.getElementById('calle').value
    // let numero = document.getElementById('numero').value
    
    // let arregloTelefonos = []
    // let telefonos = [...document.getElementById("telefonos").children]
    // telefonos.forEach(function (telefono, index) {
    //     arregloTelefonos.push(telefono.children[1].value)
    //     // arregloTelefonos.push(telefono)
    // })
    // console.log(arregloTelefonos)

    let nuevaTarjetita = document.createElement("div")
    arregloTelefonos = Array.isArray(obj.tel) ? 
    obj.tel.map(function (tel) {
        return `<li>${tel}</li>`
    }) : [obj.tel]
    console.log(obj)
    nuevaTarjetita.innerHTML = `
        <h1>${obj.nombre + " " + obj.apellido.slice(0,1)}.</h1>
        <p>${obj["fecha-nacimiento"]}</p>
        <p>${obj.calle + " " + obj.numero}</p>
        <ul>
            ${arregloTelefonos.join('')}
        </ul>
    `
    tarjetitas.appendChild(nuevaTarjetita)
    limpiaFormulario()
}

function limpiaFormulario () {
    document.getElementById('nombre').value = ""
    document.getElementById('apellido').value = ""
    document.getElementById('fecha-nacimiento').value = ""
    document.getElementById('calle').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('telefonos').innerHTML = '<div><label for="tel1">Telefono 1</label><input type="text" id="tel1" name="tel"></div>'
    
}

function nuevoCampoTel () {
    let telefonos = document.getElementById("telefonos")
    let numTelefonos = telefonos.children.length
    if (numTelefonos < 5) {
        let div = document.createElement("div")
        div.innerHTML = `<label for="tel${numTelefonos + 1}">Telefono ${numTelefonos + 1}</label><input type="text" id="tel${numTelefonos + 1}" name="tel">`
        telefonos.appendChild(div)
    }       
}