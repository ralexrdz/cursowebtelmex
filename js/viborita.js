function teclaPresionada(event) {
    let key = event.code
    if (key === "ArrowUp" || key === "ArrowDown" || key === "ArrowLeft" || key === "ArrowRight") {
        let cuadrito = document.getElementById("cuadrito")
        if (key === "ArrowUp") {
            console.log("ArrowUp")
            let topNumero = parseInt(cuadrito.style.top)
            cuadrito.style.top = (topNumero - 5) + "px"
        }
        if (key === "ArrowDown") {
            let topNumero = parseInt(cuadrito.style.top)
            cuadrito.style.top = (topNumero + 5) + "px"
            console.log("ArrowDown")
        }
        if (key === "ArrowLeft") {
            let leftNumero = parseInt(cuadrito.style.left)
            cuadrito.style.left = (leftNumero - 5) + "px"

            console.log("ArrowLeft")
        }
        if (key === "ArrowRight") {
            let leftNumero = parseInt(cuadrito.style.left)
            cuadrito.style.left = (leftNumero + 5) + "px"
            console.log("ArrowRight")
        }
    }
    
}

document.addEventListener('keydown', teclaPresionada)