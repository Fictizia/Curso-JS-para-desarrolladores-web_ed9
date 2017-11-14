# Asincronía gustaría me aprender

## Callback:

```javascript
function primerPaso(numero,callback){
  numero = numero * 2;
  console.log("lo multiplicamos por 2: ",numero);
  callback(numero,tercerPaso);
}

function segundoPaso(numeroXdos,callback){
  numeroXdos = numeroXdos + 5;
  console.log("Le sumamos 5: ",numeroXdos)
  callback(numeroXdos,ultimoPaso);
}

function tercerPaso(numMasCinco,callback){
  numMasCinco = numMasCinco * numMasCinco;
  console.log("numero al cuadrado: ",numMasCinco)
  callback(numMasCinco);
}

function ultimoPaso(numAlCuadrado,callback){
  console.log("Ultimo paso: ",numAlCuadrado +100)
}

primerPaso(4,segundoPaso);

console.log("XXXXXXXXXXXXXXXXXXXX");
```

## async await

```javascript
function modificacion(parametro){
    console.log("devuelvo param +1",parametro+1);
    return parametro + 1;
}

function tercerPaso(otroParam){
    console.log("devuelvo param *2",otroParam*2);
    return otroParam * 2;

}

function cuartoPaso(cuartoparam){
    console.log("devuelvo la potencia",cuartoparam*cuartoparam);
    return cuartoparam * cuartoparam
}

async function primerPaso(a){
    const modificame = await modificacion(a);
    const sigue = await tercerPaso(modificame);
    const ultimo = await cuartoPaso(sigue);
    
    console.log("resultado= ",ultimo);
    return ultimo;
}
async function imprimeEnorden(){
    await primerPaso(5);
    await console.log(5555555);
}

imprimeEnorden();
```

## mas async await:

```javascript
async function primerPaso(numero){
  return numero * 2;
  
}

async function segundoPaso(numeroXdos){
  return numeroXdos + 5;
  
}

async function tercerPaso(numMasCinco){
  return numMasCinco * numMasCinco;
  
}

async function ultimoPaso(numAlCuadrado){
  return { ultimo: numAlCuadrado +100 };
}

async function zasca (num){
  const primer = await primerPaso(num);
  console.log(primer);
  const segun = await segundoPaso(primer);
  console.log(segun);
  const tercer = await tercerPaso(segun);
  console.log(tercer);
  const result = await ultimoPaso(tercer);
  console.log ("El resultado es: ",result.ultimo);
}


zasca(4);
```

## Promesas:

```javascript
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

```javascript
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});
```

# Otra manera de hacer cosas:

Hasta ahora con el bucle "for" y con el condicional "if else if else" nos apañabamos.

Pero debemos conocer el resto de alternativas.

## Bucles:

### While

- **Documentación:**
    - [While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

### For

- **Documentación:**
    - [For en w3schools](http://www.w3schools.com/js/js_loop_for.asp)
    - [For en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

- **Más información:**
    - [Dominando el rendimiento](https://web.archive.org/web/20141205235948/https://blogs.oracle.com/greimer/entry/best_way_to_code_a)


### Do... While

- **Documentación:**
    - [Do... While en w3schools](http://www.w3schools.com/js/js_loop_while.asp)
    - [Do... While en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)


### Break y Continue

- **Documentación:**
    - [Break & continue en w3schools](http://www.w3schools.com/js/js_break.asp)
    - [Break en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/break)
    - [Continue en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/continue)

### Operador Ternario (?:)

- Estructura:
    ```javascript
    /* 
    -- Una operación por caso --
	condicion ? expresion1 : expresion2 
    
    -- Multiples Operaciones por caso --
	condicion ? (
		operacion1,
		operacion2,
		otraoperacion
	) : ( 
		operacion1,
		operacion2,
		otraoperacion
	);

    -- Evaluaciones multiples --
    	condicion ? expresion1 : condicion2 ? expresion1 : expresion2;
    */
    ```

- Una operación por caso:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

- Evalución múltiple:
```javascript
	var esMiembro = true;
	var esAdulto = true;
	console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tines que esperar aún. Lo siento.");
```

- Múltiples Operaciones:
```javascript
	var mensaje,
	esMiembro = true;
	
	esMiembro ? (
		mensaje = "El pago son 20.00€",
		console.info(mensaje)
	) : (
		mensaje = "El pago son 50.00€",
		console.info(mensaje)
	);
```

# Metodos muy utilizados y que debemos conocer:

- http://overapi.com/javascript

## forEach

Itera por un array y ejecuta la función que le solicites en cada uno de los elementos del array.

Ejemplo:

```javascript
const unArray = [0,1,2,3,4]

unArray.forEach(function(element){
  console.log(element);
});

 // sabiendo en indice del array:

 unArray.forEach(function(element,index){
  console.log(element);
  console.log(index);
});

// utilizando el array mismo al que se hace referencia (unArray)

unArray.forEach(function(element,index,arrayReferenciado){
  console.log(element);
  console.log(index);
  console.log(arrayReferenciado)
});
```

##Array Map

Recorre un array y te duevoelve otro basandose en la función que le pases.

Es importante que esta función si lleve return.

```javascript
const primerArray = [1,2,3,4,5,6]

//Multiplicar x2 cada uno de los elementos de un array
const otroArray = primerArray.map(function(element){
  return element * 2
})

```