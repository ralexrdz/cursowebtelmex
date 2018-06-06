let cadena = "hola amigos, el otro día me encontré con mis amigos, que conocían a sus amigos"

function cuentaPalabras (palabra, frase) {
    let pos = 0
    let cont = 0
    while (pos > -1) {
        pos = frase.indexOf(palabra, pos)
        if (pos >= 0) {
            cont++
            pos++
        }
    }
    console.log(cont)
    return cont //cuantas palabras hay en la cadena
}
