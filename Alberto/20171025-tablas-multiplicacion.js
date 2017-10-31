function calcular(v){
	console.log('TABLA DEL ' + v);
	for ( a=1; a <= 10; a++){
			console.log( a + ' X ' + v + ' = ' + ( a*v ) );		
		}
}

for ( i=1; i <= 10; i++){
	calcular(i);
}



/* VERSIÓN ALTERNATIVA


for ( i=1; i <= 10 ; i++){
	if ( i == 1 ){
		console.log('TABLA DEL 1');
		for ( a=1; a <= 10; a++){
			console.log( a + ' X 1 = ' + ( a*1 ) );		
		}
	}
	
	if (i == 2){
		console.log('TABLA DEL 2');
		for ( a=1; a <= 10; a++){
			console.log ( a + ' X 2 = ' + ( a*2 ) );
		}
	}
	
	if (i == 3){
		console.log('TABLA DEL 3');
		for ( a=1; a <= 10; a++){
			console.log ( a + ' X 3 = ' + ( a*3 ) );
		}
	}
	
	//Y así sucesivamente hasta que i==10

}
*/