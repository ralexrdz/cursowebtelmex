document.addEventListener('keydown', teclaPresionada)
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log("w", w)
console.log("h", h)
let body = document.getElementsByTagName("body")[0]

let puntaje = 0;
document.getElementById("puntaje").innerText = puntaje;

setInterval(creaPuntito, 2*1000)

function creaPuntito() {
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

function teclaPresionada(event) {
    let key = event.code
    if (key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" || key === "ArrowRight") {
        let cuadrito = document.getElementById("cuadrito")
        if (key === "ArrowUp") {
            let topNumero = parseInt(cuadrito.style.top)
            if (topNumero - 5 >= 0) {
                cuadrito.style.top = (topNumero - 5) + "px"
            }
        }
        if (key === "ArrowDown") {
            let topNumero = parseInt(cuadrito.style.top)
            if (topNumero + 20 < h) {
                cuadrito.style.top = (topNumero + 5) + "px"
            }
        }
        if (key === "ArrowLeft") {
            let leftNumero = parseInt(cuadrito.style.left)
            if (leftNumero - 5 >= 0) {
                cuadrito.style.left = (leftNumero - 5) + "px"
            }
        }
        if (key === "ArrowRight") {
            let leftNumero = parseInt(cuadrito.style.left)
            if (leftNumero + 20 < w) {
                cuadrito.style.left = (leftNumero + 5) + "px"
            }
        }
        let puntitos = document.getElementsByClassName("puntito")
        for (let i = 0; i < puntitos.length; i++) {
            let puntito = puntitos[i] 
            meComeElCuadrito(cuadrito, puntito)           
        }
    }    
}

function meComeElCuadrito(cuadrito, puntito) {
    let cuadritoX = parseInt(cuadrito.style.left)
    let cuadritoY = parseInt(cuadrito.style.top)
    let puntitoX = parseInt(puntito.style.left)
    let puntitoY = parseInt(puntito.style.top)

    // console.log("cuadritoX", cuadritoX)
    // console.log("puntitoX", puntitoX)
    // console.log("cuadritoY", cuadritoY)
    // console.log("puntitoY", puntitoY)
    if (puntitoX - cuadritoX < 20 &&
        puntitoX - cuadritoX > -10 &&
        puntitoY - cuadritoY < 20 &&
        puntitoY - cuadritoY > -10 
    ) {
        // console.log("puntitoX - cuadritoX", puntitoX - cuadritoX)
        // console.log("puntitoY - cuadritoY", puntitoY - cuadritoY)
        body.removeChild(puntito)
        puntaje++
        document.getElementById("puntaje").innerText = puntaje
    }
}