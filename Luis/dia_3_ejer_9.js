
//_Dia 3 Ejer_9_Cien tiradas de dos dados y contar las veces que entre los dos suman 10

let x=[];
let y=[];

function dados(tiradas, resultado){
	contador =0;
	for (i=0;i<tiradas;i++){
	x[i]  = Math.floor((Math.random() * 6) + 1);
	y[i] = Math.floor((Math.random() * 6) + 1);
	console.log('Tirada nº '+i+': '+x[i]+' + '+y[i]+' = '+ (x[i]+y[i]));
		if(x[i]+y[i]==resultado){
			contador+=1;
		}
	}
	console.log('Han sumado '+ contador+' veces '+ resultado);
}
dados(100, 10);