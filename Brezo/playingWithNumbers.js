/*
Diseña un programa que siga el siguiente proceso:

Pedir por teclado tres números.
Si el primero es negativo, debe sumar los otros dos
Si no multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
*/


var number1 = prompt("Number 1:");
var number2 = prompt("Number 2:");
var number3 = prompt("Number 3:");

if(number1 < 0) {
	console.log("Como el primer número es negativo, sumamos el segundo y el tercero: " + (parseInt(number2) + parseInt(number3)));
} else {
	console.log("Como el primer número es positivo, multiplicamos los tres: " + (parseInt(number1) * parseInt(number2) * parseInt(number3)));
}