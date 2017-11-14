# Recapitulamos

En esta ocasión el propio día de teroría del día 5 es toda la recapitulación que se puede hacer.

Es un archivo extremadamente resumido.

[Clase 5](./dia5.md)

A lo ya expuesto en el resumen, habra que añadir, tratamiento de errores, que no se ha dado hasta ahora, hasta entender perfectamente el concepto.

- Si recordamos bien, los callbacks podían volver con los parametros error, success... de tal forma que cuando no había errores lo que hacía era devolver el primer parametro a null.

- Las promesas, sin embargo utilizan el orden inverso (sucess,ko).

- ¿Y async await? -> async await utiliza try/catch:

```javascript

async function ejemplo(){
  try{
    const a = await funcionAsincrona();
  }catch (err) { 
    Promise.Reject(err);
    // Throw "La cagamos"; <- otra forma
  }
}

```

# Manejo Básico del DOM

Vamos a explicar el manejor básico del DOM, los metodos más utilizados en javascript vanilla para modificarlo.

Así mismo, se dejará un archivo dentro de recursos donde encontrar información sobre los menos utilizados.

Se recomienda su lectura para conocer al menos que existe, y en un momento en el que se considere necesario, al menos saber que existe y buscar info sobre ese tema.

Los metodos que vamos a ver, hacen referencia al elemento "document" que no es ni mas ni menos que lo que hay en el DOM, es decir:

Se puede decir que es el html, pero como vamos a mofificarlo, sería el html + las modificaciones que le vayamos metiendo

## Modificar contenido entre tags con id

Metodo:

```javascript
document.getElementById('idName')
```

Nos da el contenido del tag con ese id, incluyendo el tag.

por ejemplo:

```html
<p id="saludo">
     Hola Mundo
</p>
```
document.getElementByid('saludo');

Nos dará lo mismo:

```html
<p id="saludo">
     Hola Mundo
</p>
```

si solo queremos acceder (y modificar) el contenido de los tags:

document.getElementByid('saludo').innerHtml:

```Hola mundo```

si hacemos lo siguiente:

```javascript
let a = document.getElementByid('saludo').innerHtml
a += " Desde Fictizia"
```

- document.write() => Es el mal!!!!

se carga todo el documento y lo reescribe entero, innerHtml solo modifica el trozo solicitado.

## Ejemplo con botón:

```javascript
function changeMe(){
    let change = document.getElementById('saludo').innerHtml;
    change += " Siempre añado esto";
}
```

```html
<button onclick="changeMe()">Cambia</button>
```

## No debemos usar onclick

Las buenas practicas dicen que debe usarse Event Listener...

Ejemplo sacado de:

https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

Donde se explican los beneficios detenidamente.

```html
<!DOCTYPE html>
<html>
<head>
<title>DOM Event Example</title>

<style>
#t { border: 1px solid red }
#t1 { background-color: pink; }
</style>

<script>
// Function to change the content of t2
function modifyText() {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = "three"; // <-nodeValue también añade texto uso algo mas complejo...    
}
 
// Function to add event listener to t
function load() { 
  var el = document.getElementById("t"); 
  el.addEventListener("click", modifyText, false); // <- false y no poner nada es lo mismo
} 

document.addEventListener("DOMContentLoaded", load, false);
</script>

</head>
<body>

<table id="t"> 
   <tr><td id="t1">one</td></tr>
   <tr><td id="t2">two</td></tr>
</table>

</body> 
</html>

```

Si queremos pasarle parametros a la función, no es tan fácil como hacer una función con parametros y ya.

Tenemos que hacer la función con parametros, y además hay que llamarlo con una funciona anonima que llama un objeto con tu función y su parametro dentro...

Veamos:

```html
<!DOCTYPE html>
<html>
<head>
<title>DOM Event Example</title>

<style>
#t { border: 1px solid red }
#t1 { background-color: pink; }
</style>

<script>

// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;    
}
 
// Function to add event listener to t
function load() { 
  var el = document.getElementById("t"); 
  el.addEventListener("click", function(){modifyText("four")} ); //<- tampoco es para tanto :P
} 
</script>

</head>
<body onload="load();">

<table id="t">
  <tr><td id="t1">one</td></tr>
  <tr><td id="t2">two</td></tr>
</table>

</body>
</html>
```

# FETCH o hacer llamadas

- Antes de explicar Fetch necesitamos saber que es un endpoint:

## Endpoint:

- Es una dirección que tiene habilitado los diferentes verbos: "GET,POST,PUTS,PATCH,DELETE"

- GET : Trae información, es el que usareis para recibir datos.
- POST : Envía información y se usa para crear nuevos datos.
- PUTS : Modifica parte de los datos de un elemento.
- PATCH : Modifica el elemento entero.
- DELETE : Borra el elemento.

```javascript
async function pilladatos () {
  const url = 'https://randomuser.me/api/?results=10';
  let firstData = await fetch(url);
  // only proceed once promise is resolved
  let data = await respofirstData.json();
  // only proceed once second promise is resolved
  return data;
}

async function datosParsed(){
    const datosParsed = await pilladatos();
    return datosParsed;
}

const a = datosParsed();

// const a = await pilladatos(); <- funciona en chrome

```

- fetch sirve también para hacer llamadas POST, PUT, PATCH, DELETE:

- Para hacer eso hay que definir las cabeceras y mandarlas también:

```javascript

var misCabeceras = new Headers();

var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

fetch('flores.jpg',miInit)

```

los headers también pueden ser pasados directamente como un objeto:

```javascript

fetch("http://www.example.org/submit.php", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  })
```

## Enlaces con APIS:

https://www.programmableweb.com/category/all/apis

https://github.com/toddmotto/public-apis

# FETCH TESTEADO

```javascript
async function pilladatos () {
  const url = 'https://randomuser.me/api/?results=10';
  let firstData = await fetch(url);
  let data = await firstData.json();
  console.log(data);
  return data  
}

```

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.github.com/users/josheriff');
xhr.onload = function() {
    if (xhr.status === 200) {
        return xhr.responseText;
    }
    else {
        return 'Request failed.  Returned status of ' + xhr.status ;
    }
};
xhr.send();

const datos = xhr.response

// datos ya tiene lo que queremos

```

```javacript

alert('HOLA MUNDO')

const jsonData = [{ 
                   name: "jose",
                   surname: "gallego",
                   age: 34,
                 },
                 {
                   name: "brezo",
                   surname: "alvarez",
                   age: NaN,     
                 },
                 {
                   name: "jacinto",
                   surname:"isidro",
                   age:40,  
                 }];

let pintame = document.getElementById("lista")

jsonData.forEach(function(persona){
    pintame.innerHTML += `<ul>
    <li>${persona.name}</li>
    <li>${persona.surname}</li>
    <li>${persona.age}</li>
      </ul>` 

});
```
