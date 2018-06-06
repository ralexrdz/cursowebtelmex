var str = "eeey hola amigos, les quería decir, 'hola'"
console.log(str)
var pos = str.indexOf("hola")
var posUltima = str.lastIndexOf('hola')
console.log('pos', pos)
console.log('posUltima', posUltima)

var substringueado = str.substring(5,20) // pos incio, pos fin
var substrgueado = str.substr(10,5) // pos inicio, cuantos caracteres
console.log('substringueado', substringueado)
console.log('substrgueado', substrgueado)

var sliced = str.slice(-5) // mismo que substring pero desde atras para adelante
console.log('sliced', sliced)

var splited = str.split('hola')
console.log('splited', splited)

var replaced = str.replace(/hola/g, 'adios')
console.log('replaced', replaced)

