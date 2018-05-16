var lista = [9,4,2,1,0,8]

var min = 0
var pm = 0
for ( var fa = 0 ; fa < lista.length-1; fa++) {
  fb = fa
  min = lista(fb)
  pm = fb
  for (var fb = fa; fb < lista.length-1; fb--) {
    console.log(lista)
    lista[fb] = lista[fb-1]
  }
}
