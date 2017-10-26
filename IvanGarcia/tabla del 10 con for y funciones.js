function generarTablas(num){
	console.log('Tabla del ' + num + ':');
	for(contadorInner = 1; contadorInner <= 10; contadorInner++){
		console.log(num + ' X ' + contadorInner + ' = ' + contadorInner*num);
	}
}

for(contador=1; contador <= 10; contador++){
	generarTablas(contador)
}