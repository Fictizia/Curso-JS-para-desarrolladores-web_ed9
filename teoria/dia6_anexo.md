# HACER LLAMADA CON FETCH Y MODIFICAR EL DOM

## Explicación de lo que pasó en clase

Como recordamos, async/await es una abstracción sobre promesas.

Para que a un objeto le podamos poner .then((losdatosquequiero)=>losdatosquequiero) ese objeto debe ser una promesa.

Por lo tanto si queremos concatenar resultados, tenemos que devolver promesas una y otra vez, para poder hacer .then().then().then()

Por el funcionamiento de las promesas tendreis acceso dentro de la función que la soluciona, y cuando hagamos un return...

Tachan!!! está preparado para convertirse en otra promesa y así infinitamente, por lo que siempre tendremos que hacer el tratamiento
de los datos dentro de una función que acaba de resolver esa promesa.

Por eso el console.log dentro de la funcion si tenía el comportamiento esperado pero fuera de la función no.

# Solución objeto simple ASYNC/ AWAIT

```javascript
async function llamaYPinta(url){
    const primera = await fetch(url);
    const text = await primera.json();
    
    document.write(`name: ${text.login}
    
    <p>
    avatar: <img src="${text.avatar_url}">
    </p> `);
}

llamaYPinta('https://api.github.com/users/josheriff');

```

# Solucion objeto complejo (array de objetos) ASYNC/ AWAIT

```javascript
async function llamaYPinta(url){
    const primera = await fetch(url);
    const text = await primera.json();
    text.forEach(function(githubUser){
      document.write(`name: ${githubUser.login}
        <p>
       avatar: <img src="${githubUser.avatar_url}">
       </p> `);
    })    
}

llamaYPinta('https://api.github.com/users');

```

# NOTAS:

He usado document.write aposta para que no podais copiar y pegar las funciones.

Debereis haceros vuestras propias funciones que pinten los datos segun las valláis invocando.

De esta forma además nos aseguramos que no hay variables globales.

# Resumen:

Tendrás que hacer una función que modifique el dom directamente e invocarla tantas veces sea necesario.

Es posible que dependiendo de como vengan los datos tengas que hacer varias funciones con este fin.
