let turno = 'X'

function clicked (element) {
    element.innerText = turno
    if (turno === 'X') {
        turno = 'O'
    } else {
        turno = 'X'
    }
    console.log("Es turno de:", turno)
}


// console.log("cuandoElDomYaCargó", Date.now())
// var casillas = document.getElementsByClassName("casilla")
// console.log(casillas)
// for (let i = 0; i < casillas.length; i++) {
//     casillas[i].onclick = clicked
// }

