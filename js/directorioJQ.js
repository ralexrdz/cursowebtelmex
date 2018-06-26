function agregarADirectorio () {
    let formulario = getFormData($("#formulario").serializeArray())
    console.log(formulario)

    arregloTelefonos = Array.isArray(formulario.tel) ? 
    formulario.tel.map(function (tel) {
        return `<li>${tel}</li>`
    }) : [`<li>${formulario.tel}</li>`]

    let nuevaTarjetita = $(`
        <h1>${formulario.nombre + " " + formulario.apellido.slice(0,1)}.</h1>
        <p>${formulario["fecha-nacimiento"]}</p>
        <p>${formulario.calle + " " + formulario.numero}</p>
        <ul>
            ${arregloTelefonos.join('')}
        </ul>
    `)
    
    $("#tarjetitas").append(nuevaTarjetita)
    limpiaFormulario()
}

function getFormData(form){
    var obj = {}
    $.map(form, function(n, i){
        if (obj[n.name] === undefined) {
            obj[n.name] = n.value
        } else {
            if (Array.isArray(obj[n.name])) {
                obj[n.name].push(n.value)
            } else {
                obj[n.name] = [obj[n.name], n.value]
            }
        }
    })
    return obj
}

function limpiaFormulario () {
    $('#nombre').val("")
    $('#apellido').val("")
    $('#fecha-nacimiento').val("")
    $('#calle').val("")
    $('#numero').val("")
    $('#telefonos').html('<div><label for="tel1">Telefono 1</label><input type="text" id="tel1" name="tel"></div>')
}

function nuevoCampoTel () {
    let telefonos = $("#telefonos")
    console.log(telefonos.children())
    let numTelefonos = telefonos.children().length
    if (numTelefonos < 5) {
        let div = $(`<div><label for="tel${numTelefonos + 1}">Telefono ${numTelefonos + 1}</label><input type="text" id="tel${numTelefonos + 1}" name="tel"></div>`)
        telefonos.append(div)
    }       
}