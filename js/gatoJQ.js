let turno = 'X'

$(function() {
    $(".casilla").click(clicked)
})

function clicked () {
    // el elemento que manda llamar el evento 
    //se guarda en la variable 'this'
    let element = this
    if (element.innerText !== '') return
    element.innerText = turno
    if (turno === 'X') {
        turno = 'O'
    } else {
        turno = 'X'
    }
     // JQueryObject
    let tiros = []   
    $(".casilla").each(function (index, element) {
        tiros.push(element.innerText)
    })
    // tiros = ['', 'X', 'O', ... , 'O']
    alguienGanoOEmpate(tiros)
}

function alguienGanoOEmpate(tiros) {
    // dime si ganó X, si ganó O, si empataron o si sigue el juego
    
    // tiros = ['', 'X', 'O', ... , 'O']

    let hayGanador = false
    
    // renglones iguales
    // "!" significa negación 
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
   
    // !tiros.includes('') => significa que tiros no tiene un valor ''
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
    $(".casilla").each(function (index, element) {
        element.innerText = null;
    })
}
    
    /*
     0  |  1  |  2
     3  |  4  |  5
     6  |  7  |  8
    
    
     0 == 1, 1 == 2
    */