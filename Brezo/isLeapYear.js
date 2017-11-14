/*
Diseña un programa que nos confirme si un año es bisiesto o no.

Caracteristicas de un año bisiesto:
- Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
- O puede ser divisble entre 100 y entre 400
*/

var yearToCheck = prompt("Introduce un año para saber si es bisiesto:");

// Validate if the year introduced by the user have four digits
var yearOK = /^\d{4}$/.test(yearToCheck);

// Bucle to check if its is leap-year
if(yearOK) {
	if((yearToCheck % 4 == 0) && (!(yearToCheck % 100 == 0))) {
		console.log(yearToCheck + " es un año bisiesto.");
	} else {
		console.log(yearToCheck + " no es un año bisiesto.")
	}
} else {
	console.log("Debes introducir cuatro cifras.")

}

