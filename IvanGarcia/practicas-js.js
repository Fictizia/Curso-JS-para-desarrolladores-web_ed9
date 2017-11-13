//1. Operaciones con dos numeros
function operaciones(num1,num2){
	console.log(num1 + '+' + num2 + '=' + (num1+num2));
	console.log(num1 + '-' + num2 + '=' + (num1-num2));
	console.log(num1 + '/' + num2 + '=' + num1/num2);
	console.log(num1 + 'x' + num2 + '=' + num1*num2);
}

//2. Saber el porcentaje de hombre y mujeres en nuestro curso.
function menPercent (men,women){
	let total = men + women;
	let menPercentOfTotal = (men/total) * 100;
	console.log("El porcentaje de Hombres es:");
	console.log(menPercentOfTotal+ '%');
}
function womenPercent (men,women){
	let total = men + women;
	let womenPercentOfTotal = (women/total) * 100;
	console.log("El porcentaje de Mujeres es:");
	console.log(womenPercentOfTotal + '%');
}
menPercent(10,6)
womenPercent(10,6)

//3. Diseñar un programa que e a dos numero y los compare como resultador que nos diga cual es mayor o si son iguales.
function compareNumbers(num1,num2){
	if(num1 > num2){
		console.log(num1 + ' es mayor que ' + num2);
	}
	else if(num2 > num1){
		console.log(num2 + ' es mayor que ' + num1);
	}
	else{
		console.log(num1 + ' y ' + num2 + ' son iguales');
	}
}

compareNumbers(2,3)


//4. Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
function compareThreeNumber(num1,num2,num3){
	if(num1 > num2 && num1 > num3){
		console.log(num1 + ' es mayor que ' + num2 + ' y ' + num3);
	}
	else if(num2 > num1 && num2 > num3){
		console.log(num2 + ' es mayor que ' + num1 + ' y ' + num3);
	}
	else{
		console.log(num3 + ' es mayor que ' + num1 + ' y ' + num2);
	}
}

compareThreeNumber(3,2,1.)


// 5 - Diseña un programa que siga el siguiente proceso:

// Pedir por teclado tres números.
// Si el primero es negativo, debe sumar los otros dos
// Si no multiplicará los tres numeros
// Mostrar el resultado final incluyendo una referencia a la operación realizada.

function threeNumbers(num1,num2,num3){
	if(num1 >= 0){
		console.log('El primer número es positivo y la suma de los tres es:' + (num1+num2+num3));
	}
	else{
		console.log('El primer número es negativo, por lo que la suma de los otros dos es:' + (num2+num3));
	}
}

threeNumbers(-1,8,2)

//7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
function isNegative(num){
	if(num <0){
		console.log('El número es negativo');
	}else{
		console.log('El número es positivo')
	}
}

isNegative(2)

//8 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es par o impar.
function esPar(num){
	if(num % 2 == 0){
		console.log('El número es par');
	}else{
		console.log('El número es impar')
	}
}

esPar(2)

//6 - Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario

function firstPairsNumber(num){
	let limit = num+50;
	let totalPares = 0;
	let totalImpares = 0;
	for(contPa = num; contPa <= limit; contPa = contPa+2){
		totalPares += contPa;
	}
	for(contIm = num+1; contIm < limit; contIm = contIm+2){
		totalImpares++;
	}
	console.log('%c' + totalPares,  'background:blue; color: #fff; font-size: 16px; padding: 0px 25px;');
	console.log('%c' + totalImpares, 'background:green; color: #fff; font-size: 16px; padding: 00px 25px;');
}

////Prueba de API Instagram
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=2208368978.ba35738.b696f6f48a7a46f09ca810b6721936ae');
xhr.onload = function() {
    if (xhr.status === 200) {
        return xhr.responseText;
    }
    else {
        return 'Request failed.  Returned status of ' + xhr.status ;
    }
};
xhr.send();

const datos = xhr.response;

async function pilladatos () {
  const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=2208368978.ba35738.b696f6f48a7a46f09ca810b6721936ae';
  let firstData = await fetch(url);
  let data = await firstData.json();
  console.log(data);
  return data  
}