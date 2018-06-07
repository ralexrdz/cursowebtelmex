function volteaNum (numero) {
    let numeroVolteao = ""
    for (let i = numero.length -1; i >= 0 ; i--) {
        numeroVolteao += numero[i]        
    }
    console.log(numeroVolteao)
}