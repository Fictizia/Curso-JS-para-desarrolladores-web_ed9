# Kata de paginacion

```javascript
// PROBLEMA: TENEMOS UN ARRAY CON 300 OBJETOS
// MOSTRAR DE 10 EN 10
// PODER CLICKAR EN NUMERO 
// EL NUMERO DE NUMEROS DEPENDERÁ DEL TOTAL DE OBJETOS.

// LOS OBJETOS VAN A SER NUMEROS

function preparacion(totalObjectsNumber){
    let ourArray = [];
    for (let index = 0; index < totalObjectsNumber; index++) {
        ourArray.push({ clave: index+1 });
    
    }

    return ourArray;
}

 const a = preparacion(500);
// console.log(a);

// que algoritmo usariais para mostrar de 10 en 10.

// caso 1 muestra desde el index 0 hasta el index 9 (desde resultado 1 al resultado 10)



function clickNumber (number){
    const end = number * 10
    for (let index = end - 10 ; index < end; index++){
        console.log(a[index]);     
    }
}

clickNumber(30);

// OTRO EJEMPLO

function clickJacinto(number){
    const end = number * 10;
    const start = end - 10;
    const results = a.slice(start,end)

    results.forEach(function(singleObject){
        console.log(singleObject)
    })
}

clickJacinto(30);
```
