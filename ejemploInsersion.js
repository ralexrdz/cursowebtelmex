var lista = [9,4,2,1,0,8]

var aux = 0
console.log(lista)
for ( var fa = 1 ; fa < lista.length-1; fa++) {
  console.log(fa)
  if ( lista[fa] < lista[fa-1] ) {
    aux = lista[fa]
    for (var fb = fa; (fb == 0 || aux > lista[fb-1]); fb--) {
      console.log(lista)
      lista[fb] = lista[fb-1]
    }
    lista[fb] = aux
    console.log(lista)
  }
}
