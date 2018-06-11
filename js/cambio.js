var cantidad = prompt("Indica la cantidad: ");

console.log("El cambio de la cantidad " + cantidad);
var monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50];

var monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50];

var cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(cantidad >= monedas[i])

for (var i = 0; i < monedas.length; i++) {
    if (cantidad >= monedas[i]) {
        cambio[i] = parseInt(cantidad / monedas[i]);
        cantidad = (cantidad - (cambio[i] * monedas[i])).toFixed(2);
    }
}

for (i = 0; i < monedas.length; i++) {
    if (cambio[i] > 0) {
        if (monedas[i] >= 20)
            console.log("Hay: " + cambio[i] + " billetes de: " + monedas[i] + " pesos;");
        else
            console.log("Hay: " + cambio[i] + " monedas de: " + monedas[i] + " pesos;");
    }
}