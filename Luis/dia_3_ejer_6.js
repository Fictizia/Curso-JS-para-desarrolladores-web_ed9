//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.
//__OK __Pero variables globales

function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
   }
}
function addNum (number, rep){
	addPair = 0;
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		isPair(number)
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}