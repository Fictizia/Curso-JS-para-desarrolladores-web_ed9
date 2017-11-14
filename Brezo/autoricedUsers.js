/*
Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.
*/

var password = "Fictizia mola mucho";
var userPassword = prompt("Introduce la clave súper secreta");

if(password === userPassword) {
	console.log("Great! You rules!");
} else {
	console.log("Ohhh, thats wrong! Are you an empire soldier?");
}