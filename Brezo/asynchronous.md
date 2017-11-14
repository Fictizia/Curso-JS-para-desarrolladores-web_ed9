# Asincronía

La asincronía en Js sirve para conseguir que una función se ejecute después de que se haya ejecutado otra. En Js el código se ejecuta de una manera lógica, pero con la asincornía conseguimos dejar de ejecutar partes de nuestro script de manera secuencial. El ejemplo más sencillo de código asíncrono es el siguiente:

```javascript
console.log('1')
setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000)
console.log('3')

// La consola devuelve: 
// 1
// 3
// 2
```
El código se sigue ejecutando, mientras que  la función afterTwoSeconds solo se ejecuta después de los 2" segundos.

Para entender para qué sirve Js asíncrono, podemos pensar en este ejemplo de [pluralsight.com](http://pluralsight.com):
Digamos que llamas a un amigo y le pides la dirección de correo de un amigo mutuo que has perdido. Tu amigo no tiene esta información memorizada, por lo que tiene que encontrar su libreta de direcciones y buscarla. Esto podría llevarle unos minutos. Existen diferentes estrategias para cómo proceder:

**1.** (Síncrono) Mantenerse al teléfono y esperar.
**2.** (Asíncrono) Decirle a tu amigo que te devuelva la llamada una vez que tenga la información. Mientras tanto, puede concentrar su atención en las otras tareas que necesita realizar, como doblar la ropa y lavar los platos.

Cuando damos instrucciones de forma asíncrona, éstas no se ejecutan de forma secuencial con el resto del programa, sino que se les da una prioridad menor y se añaden a una cola de ejecución en la que quedan a la espera de ser procesadas.





## Callbacks & AsyncAwait

### 1. Callbacks

**Ejemplo:**
```javascript
function primerPaso(numeroXdos, callback) {
  numeroXdos = numeroXdos * 2;
  console.log("Primer paso: lo multiplicamos por 2: " + numeroXdos);
  callback(numeroXdos, tercerPaso);
}

function segundoPaso(numeroMasCinco, callback) {
  numeroMasCinco = numeroMasCinco + 5;
  console.log("Segundo paso: le sumamos 5: " + numeroMasCinco)
  callback(numeroMasCinco, ultimoPaso);
}

function ultimoPaso(numFinal,callback) {
  console.log("Último paso: le añadimos 100 al final: " + numFinal + 100)
}

function tercerPaso(numAlCuadrado, callback) {
  numAlCuadrado = numAlCuadrado * numAlCuadrado;
  console.log("Tercer paso: número al cuadrado: " + numAlCuadrado)
  callback(numAlCuadrado);
}

primerPaso(4, segundoPaso);


// La consola devuelve:
// Primer paso: lo multiplicamos por 2: 8
// Segundo paso: le sumamos 5: 13
// Tercer paso: número al cuadrado: 169
// Último paso: 169100
```

En este ejemplo, se ejecutan las dos primeras funciones: **primerPaso**(4, **segundoPaso**), y a continuación tercerPaso y ultimoPaso.



### 2. Async/Await

**Mismo ejemplo pero con async/await:**
```javascript
async function primerPaso(numeroXdos) {
  return numeroXdos * 2;
}

async function segundoPaso(numMasCinco) {
  return numMasCinco + 5;
}

async function tercerPaso(numAlCuadrado) {
  return numAlCuadrado * numAlCuadrado;
}

async function ultimoPaso(numFinal) {
  return {ultimo: numFinal + 100};
}

async function result(num) {
  const primer = await primerPaso(num);
  console.log(primer);
  const segun = await segundoPaso(primer);
  console.log(segun);
  const tercer = await tercerPaso(segun);
  console.log(tercer);
  const result = await ultimoPaso(tercer);
  console.log ("El resultado es: ", result.ultimo);
}

result(4);


// La consola devuelve:
// 8
// 13
// 169
// El resultado es:  269
```




Fuentes: 
* [pluralsight.com](http://pluralsight.com)
* [nauzethdez.com](https://www.nauzethdez.com/js-9-programacion-asincrona/)



