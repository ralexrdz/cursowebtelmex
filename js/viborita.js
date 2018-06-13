// ESCUCHADOR A TECLAS
document.addEventListener('keydown', teclaPresionada)

// VARIABLES GLOBALES
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let yaEmpece = false
let direccion = ""
let body = document.getElementsByTagName("body")[0]
let cuadrito = document.getElementById("cuadrito")
let puntaje

// INICIO
reinicia()

// INTERVALOS
setInterval(creaPuntito, 3 * 1000)
setInterval(mueveCuadrito, 100)

// FUNCIONES
function reinicia () {
    // ubico cuadrito en centro de viewport
    cuadrito.style.top = (h / 2) - 10 + "px"
    cuadrito.style.left = (w / 2) - 10 + "px"
    // reinicio el puntaje en 0 y lo reflejo en el span con id puntake
    puntaje = 0
    document.getElementById("puntaje").innerText = puntaje;
    // borra todos los puntitos
    let puntitos = document.getElementsByClassName("puntito")
    let cuantosPuntitos = puntitos.length
    for (let i = cuantosPuntitos - 1; i >= 0; i--) {
        puntitos[i].parentNode.removeChild(puntitos[i])          
    }
}

function creaPuntito () {
    if (yaEmpece) {
        let nuevoPuntito = document.createElement("div")
        nuevoPuntito.className = "puntito"
        let randomX = parseInt(Math.random() * (w-20))
        let randomY = parseInt(Math.random() * (h-20))

        console.log(randomX, randomY)
        nuevoPuntito.style.top = randomY + "px"
        nuevoPuntito.style.left = randomX + "px"
        body.appendChild(nuevoPuntito)
        console.log("después de 1 seg")
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
        let puntitos = document.getElementsByClassName("puntito")
        for (let i = 0; i < puntitos.length; i++) {
            let puntito = puntitos[i] 
            meComeElCuadrito(cuadrito, puntito)           
        }
    }
}

function teclaPresionada(event) {
    let key = event.code
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
    let leftNumero = parseInt(cuadrito.style.left)
    // si no he llegado a borde izq 
    if (leftNumero - 5 >= 0) {
        // me muevo
        cuadrito.style.left = (leftNumero - 5) + "px"
    } else meMuero()
}

function mueveCuadritoDer () {
    let leftNumero = parseInt(cuadrito.style.left)
    if (leftNumero + 20 < w) {
        cuadrito.style.left = (leftNumero + 5) + "px"
    } else meMuero()
}
function mueveCuadritoArr () {
    let topNumero = parseInt(cuadrito.style.top)
    if (topNumero - 5 >= 0) {
        cuadrito.style.top = (topNumero - 5) + "px"
    } else meMuero()
}
function mueveCuadritoAba () {
    let topNumero = parseInt(cuadrito.style.top)
    if (topNumero + 20 < h) {
        cuadrito.style.top = (topNumero + 5) + "px"
    } else meMuero()
}

function meComeElCuadrito(cuadrito, puntito) {
    let cuadritoX = parseInt(cuadrito.style.left)
    let cuadritoY = parseInt(cuadrito.style.top)
    let puntitoX = parseInt(puntito.style.left)
    let puntitoY = parseInt(puntito.style.top)

    if (puntitoX - cuadritoX < 20 &&
        puntitoX - cuadritoX > -10 &&
        puntitoY - cuadritoY < 20 &&
        puntitoY - cuadritoY > -10 
    ) {
        body.removeChild(puntito)
        puntaje++
        document.getElementById("puntaje").innerText = puntaje
    }
}

function meMuero () {
    yaEmpece = false
    alert("LÁSTIMA")
    reinicia()
}