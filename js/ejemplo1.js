console.log("Hey yo yo")
const constante = "constante"
console.log('constante', constante)
console.log('x primero', x)
// console.log('cont', cont)

let y = suma10(x)

function suma10(num) {
    console.log(num)
    if(!num) return 'no mandaste un numero'
    var cont = 40;
    console.log('x adentro', x + num)
    return num + 10
}

for (let i = 0; i < 10; i++) {
    console.log('hola', i)
}
console.log(i)
for (let i = 0; i < 5; i++) {
    console.log('adios', i)
}

let x

console.log('x afuera', x)
console.log('y', y)