// ESCUCHADOR A TECLAS
$(document).keydown(teclaPresionada)

// VARIABLES GLOBALES
var w = Math.max($(document).width(), $(window).width() || 0);
var h = Math.max($(document).height(), $(window).height() || 0);
let yaEmpece = false
let direccion = ""
let body = $("body")[0]
let cuadrito = $("#cuadrito")
let puntaje

// INICIO
reinicia()

// INTERVALOS
setInterval(creaPuntito, 3 * 1000)
setInterval(mueveCuadrito, 100)

// FUNCIONES
function reinicia () {
    // ubico cuadrito en centro de viewport
    cuadrito.css('top', (h / 2) - 10 + "px")
    cuadrito.css('left', (w / 2) - 10 + "px")
    // reinicio el puntaje en 0 y lo reflejo en el span con id puntake
    puntaje = 0
    $("#puntaje").text(puntaje)
    // borra todos los puntitos
    $(".puntito").remove()
}

function creaPuntito () {
    if (yaEmpece) {
        let nuevoPuntito = $('<div class="puntito"></div>')
        let randomX = parseInt(Math.random() * (w-20))
        let randomY = parseInt(Math.random() * (h-20))

        console.log(randomX, randomY)
        nuevoPuntito.css('top', randomY + "px")
        nuevoPuntito.css('left', randomX + "px")
        body.appendChild(nuevoPuntito[0])
    }
}

function mueveCuadrito () {
    if (yaEmpece) {
        switch (direccion) {
            case "arriba":
                mueveCuadritoArr()
                break;        
            case "abajo":
                mueveCuadritoAba()
                break;        
            case "izquierda":
                mueveCuadritoIzq()
                break;        
            case "derecha":
                mueveCuadritoDer()
                break;        
            default:
                break;
        }
        $(".puntito").each(function (index, elem){
            meComeElCuadrito(cuadrito, $(elem))           
        })
    }
}

function teclaPresionada(event) {
    let key = event.originalEvent.code
    if (key === "ArrowUp" || 
        key === "ArrowDown" || 
        key === "ArrowLeft" || 
        key === "ArrowRight")
    {        
        yaEmpece = true
        switch (key) {
            case "ArrowUp":
                direccion = "arriba"
                break;
            case "ArrowDown":
                direccion = "abajo"
                break;
            case "ArrowLeft":
                direccion = "izquierda"
                break;
            case "ArrowRight":
                direccion = "derecha"
                break;
            default:
                break;
        }
    }    
}

function mueveCuadritoIzq () {
    let leftNumero = parseInt(cuadrito.css('left'))
    // si no he llegado a borde izq 
    if (leftNumero - 5 >= 0) {
        // me muevo
        cuadrito.css('left', (leftNumero - 5) + "px")
    } else meMuero()
}

function mueveCuadritoDer () {
    let leftNumero = parseInt(cuadrito.css('left'))
    if (leftNumero + 20 < w) {
        cuadrito.css('left', (leftNumero + 5) + "px")
    } else meMuero()
}
function mueveCuadritoArr () {
    let topNumero = parseInt(cuadrito.css('top'))
    if (topNumero - 5 >= 0) {
        cuadrito.css('top', (topNumero - 5) + "px")
    } else meMuero()
}
function mueveCuadritoAba () {
    let topNumero = parseInt(cuadrito.css('top'))
    if (topNumero + 20 < h) {
        cuadrito.css('top', (topNumero + 5) + "px")
    } else meMuero()
}

function meComeElCuadrito(cuadrito, puntito) {
    let cuadritoX = parseInt(cuadrito.css('left'))
    let cuadritoY = parseInt(cuadrito.css('top'))
    let puntitoX = parseInt(puntito.css('left'))
    let puntitoY = parseInt(puntito.css('top'))

    console.log(cuadritoX, cuadritoY, puntitoX, puntitoY)
    if (puntitoX - cuadritoX < 20 &&
        puntitoX - cuadritoX > -10 &&
        puntitoY - cuadritoY < 20 &&
        puntitoY - cuadritoY > -10 
    ) {
        body.removeChild(puntito[0])
        puntaje++
        $("#puntaje").text(puntaje)
    }
}

function meMuero () {
    yaEmpece = false
    alert("LÁSTIMA")
    reinicia()
}