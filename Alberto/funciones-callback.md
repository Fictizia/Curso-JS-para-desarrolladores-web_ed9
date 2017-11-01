# Funciones callback

## La carga asíncrona

Sirve para que una función dé paso a otra una vez haya terminado de hacer la misión que tenga encomendada.

Esto es necesario cuando necesitamos que la segunda función utilice valores que deben hallarse en la primera y sin los cuales no podría operar.

Hay tres métodos para conseguirla:

- **Funciones callback:** una función llama a otra. Tiene el problema de que puede haber un exceso de funciones anidadas.
- **Arrays de funciones**
- **Async await:** sólo para las últimas versiones de JS, pero simplifica mucho el trabajo.

## Pasos para crear una función callback

Partimos de este ejemplo:

```javascript
    function primerPaso(a,b){
        if (typeof a != "number"){
            b('error' + a + 'is not a number');
        }
        else {
            a = a + 1;
            b(a);
        }
        
    };
    
    function segundoPaso(c){
        console.log(c);
    }
    
    primerPaso(4,segundoPaso);
```

**1.** Declaramos una primera función que se llama primerPaso. Esta función está programada para recibir dos datos cuando se invoque. El que se ponga en primer lugar se llamará "a" y el se ponga en segundo lugar cuando se invoque será el parámetro "b".

**2.** Esta función establece que, si el primer parámetro que se le dé ("a") NO es un número, se invoca una función, "b". Esto no signfica que "b" sea el nombre de la función en cuestión. En realidad "b" podría ser cualquier función, lo importante es que al invocar primerPaso haya un nombre de función en la segunda posición de los parámetros (que es la posición que ocupa la letra "b"). 

**3.** Esa función "b" tendrá como parámetro un string con un mensaje determinado. Una vez sepamos cuál es esa función "b" sabremos qué hará con ese string.

**4.** Pasando de línea, le decimos que si "a" sí es un número, entonces debe sumarle 1. Después, nuevamente invocamos la función "b" (la que esté en la segunda posición de los parámetros de primerPaso cuando la invoquemos) y le pasamos como parámetro este nuevo valor que tiene "a" después de haberle sumado 1.

**5.** Más abajo declaramos otra función que se llama segundoPaso. Esta función admitirá un solo parámetro "c", que será el que ocupe su primera posición. Lo único que hace esta función es escribir en la consola el valor de "c".

**6.** Y ahora llega la hora de darle valores concretos a los parámetros. En la última línea, invocamos la función primerPaso. En la primera línea veíamos que primerPaso tiene hueco para dos parámetros. Pues bien, ahora en el primer hueco (ocupado por "a") le pasamos un valor numérico 4, y en el segundo hueco ("b") le introducimos la función segundoPaso (la función callback). 

**7.** Ahora, al pasar por el "else" de primerPaso (ya que 4 es un valor numérico), la "b" se convertirá en segundoPaso, la invocamos y utilizará la variable "a" como su parámetro de primera posición. 

**8.** Al declarar segundoPaso le dimos espacio para un parámetro "c". Como hemos invocado segundoPaso desde el else de primerPaso, le hemos dado el mismo valor de "a", así que segundoPaso escribirá en la consola el nuevo valor de "a". 

Es importante remarcar que "b" puede cambiar según se pase por parámetro al invocar la función primerPaso. Por ejemplo:

```javascript
    function primerPaso(a,b){
        if (typeof a != "number"){
            b('error' + a + 'is not a number');
        }
        else {
            a = a + 1;
            b(a);
        }
        
    };
    
    function segundoPaso(c){
        console.log(c);
    }
    
    function tercerPaso(d){ //AQUÍ NOS INVENTAMOS UNA FUNCIÓN NUEVA
        console.log('Hola, yo soy el número ' + d);
    }
    
    
    primerPaso(4,segundoPaso);
    primerPaso(4,tercerPaso); //Y AQUÍ LA INVOCAMOS A CONTINUACIÓN DE segundoPaso
```

Hay disponible una explicación más seria sobre el tema en el libro gratuito de Ulises Gascón. Disponible en: https://leanpub.com/javascript-inspirate

