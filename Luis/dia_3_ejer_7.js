
//_Dia 3 Ejer 7_contar veces que aparece una letra dentro de una frase
//__OK__ver .push

function searchEnd(fin, letter, text){
	if(fin == text.length){
		console.log('Busqueda terminada.');
		if(indexLetter.length >0){
			console.log('La letra "'+letter+'" se repite '+ indexLetter.length + ' veces.');
		}
		else{
			console.log('El texto no tiene la letra: "'+letter + '"');
		}
	}
}

function searchLetter(text, letter){
	let contadorText=0;
	let contador=0;
	//textString = text;
	indexLetter = [];
	
	while (contadorText < text.length){
		let indexOk = text.indexOf(letter, contadorText);
		console.log(indexOk);
		if(indexOk === -1 && indexLetter.length >0){
			contadorText=text.length;
		}
		else if(indexOk === -1 ){
			contadorText=text.length;
		}
		else{
			//indexLetter.push =(indexOk);
			indexLetter[contador]  =(indexOk);
			contadorText = indexOk + 1;
			contador++
		}
		searchEnd(contadorText, letter, text);
	}
	console.log(indexLetter);
}
searchLetter("Hello world, welcome", "o");