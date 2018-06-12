let turno = 'X'

console.log("w", w)
console.log("h", h)

function clicked (element) {
    if (element.innerText !== '') return
    element.innerText = turno
    if (turno === 'X') {
        turno = 'O'
    } else {
        turno = 'X'
    }
    let casillas = document.getElementsByClassName("casilla") // HTMLCollection
    let tiros = []
    for (let i = 0; i < casillas.length; i++) {
        tiros.push(casillas[i].innerText)
    }
    // tiros = ['', 'X', 'O', ... , 'O']
    alguienGanoOEmpate(tiros)
}

function alguienGanoOEmpate(tiros) {
    // dime si ganó X, si ganó O, si empataron o si sigue el juego
    
    // tiros = ['', 'X', 'O', ... , 'O']
    console.log('tiros', tiros);

    let hayGanador = false
    
    // renglones iguales
    if (!hayGanador) hayGanador = compara3Casillas(0, 1, 2, tiros)
    if (!hayGanador) hayGanador = compara3Casillas(3, 4, 5, tiros)
    if (!hayGanador) hayGanador = compara3Casillas(6, 7, 8,  tiros)
    
    // columnas iguales
    if (!hayGanador) hayGanador = compara3Casillas(0, 3, 6, tiros)
    if (!hayGanador) hayGanador = compara3Casillas(1, 4, 7, tiros)
    if (!hayGanador) hayGanador = compara3Casillas(2, 5, 8,  tiros)
    
    // Diagonales
    if (!hayGanador) hayGanador = compara3Casillas(0, 4, 8, tiros)
    if (!hayGanador) hayGanador = compara3Casillas(2, 4, 6, tiros)
   
    
    if (!tiros.includes('') && !hayGanador ) {
        alert("empate")
        hayGanador = true
    }
    if (hayGanador) reinicia()
}

function compara3Casillas(casilla1, casilla2, casilla3, tiros) {
    let alguienGano = false
    if (tiros[casilla1]!== '' && tiros[casilla1] == tiros[casilla2] && tiros[casilla2] == tiros[casilla3]) {
        console.log("fila arriba")
        if (tiros[casilla1] === 'X') {
            alert("gano X")
            alguienGano = true
        }
        else {
            alert("gano O")
            alguienGano = true
        }
    }
    return alguienGano
}

function reinicia () {
    let casillas = document.getElementsByClassName("casilla")
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].innerText = null;
    }
}
    
    /*
     0  |  1  |  2
     3  |  4  |  5
     6  |  7  |  8
    
    
     0 == 1, 1 == 2
    */