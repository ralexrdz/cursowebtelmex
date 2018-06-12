let turno = 'X'

function clicked (element) {
    if (element.innerText !== '') return
    element.innerText = turno
    if (turno === 'X') {
        turno = 'O'
    } else {
        turno = 'X'
    }
    let casillas = document.getElementsByClassName("casilla")
    let tiros = []
    for (let i = 0; i < casillas.length; i++) {
        tiros.push(casillas[i].innerText)
    }
    let meDetengo = alguienGanoOEmpate(tiros)
    console.log(tiros)
    console.log("Es turno de:", turno)
}

function alguienGanoOEmpate(tiros) {
    // dime si ganó x, si ganó, si empataron o si sigue el juego
    if (tiros[0]!== '' && tiros[0] == tiros[1] && tiros[0]==tiros[2]) {
        if (tiros[0] === 'X') alert("gano X")
        else alert("gano O")
    }
}

// console.log("cuandoElDomYaCargó", Date.now())
// var casillas = document.getElementsByClassName("casilla")
// console.log(casillas)
// for (let i = 0; i < casillas.length; i++) {
//     casillas[i].onclick = clicked
// }

