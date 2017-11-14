/*
Diseña un algoritmo introducido un numero y pasarlo a número romanos.
*/




var numberOfUser = prompt("Introduce un número");

var romanNumerals = [
	["I", 1],
	["V", 5],
	["X", 10],
	["L", 50],
	["C", 100],
	["M", 1000]
]

function convertToRoman(numberOfUser) {
	if (numberOfUser == 0) {
		console.log("Debes introducir un número mayor que cero");
	} for (var i = 0; i < romanNumerals.length; i++) {
		if(numberOfUser >= romanNumerals[i][0]) {
			console.log(romanNumerals[i][1] + convertToRoman(numberOfUser - romanNumerals[i][0]));
		}
	}
}


// if(numberOfUser == 1) {
// 	console.log("I");
// }