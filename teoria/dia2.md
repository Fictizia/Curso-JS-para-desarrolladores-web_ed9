# Clase 2


### Pseudocódigo

> El pseudocódigo (o falso lenguaje) es una descripción de alto nivel compacta e informal del principio operativo de un programa informático u otro algoritmo.

> Utiliza las convenciones estructurales de un lenguaje de programación real, pero está diseñado para la lectura humana en lugar de la lectura mediante máquina, y con independencia de cualquier otro lenguaje de programación. Normalmente, el pseudocódigo omite detalles que no son esenciales para la comprensión humana del algoritmo, tales como declaraciones de variables, código específico del sistema y algunas subrutinas. *Fuente: [Wikiwand](http://www.wikiwand.com/es/Pseudoc%C3%B3digo)*

**Partes:**
- Definición del Problema:
 - Entrada (Datos de Entrada)
 - Proceso (Modificaciones)
 - Salida (Datos finales)
- Cabecera:
 - Variables, Constantes, etc...
- Cuerpo:
 - Inicio, Instrucciones, Fin


**Ginger Code**

![logo](https://raw.githubusercontent.com/GingerCode/Art/master/Logo/Logo%20-%20formato%20horizontal%402x.png)

- [@gingerCode en Github](https://github.com/GingerCode)

**Trabajando con Ginger**

- No utilizaremos:
  - Arreglos
  - Objetos
  - Definición explícita
  - Expresiones coloquiales
  - Exportaciones

**Variables:**
- Numéricos
 - Enteros
 ```
  -123, 12, 0...
 ```
 - Reales
 ```
  1.75, 3.1415...
 ```

- Carácter (cadenas)
```
	'texto', "más textos..."
```
- Lógico (Boleanos)
```
	VERDADERO o FALSO
```

**Expresiones:**
- Operadores
- Funciones


**Acciones Secuenciales:**
-  Asignación
```
	@variable = (expresion);
	
	// Otra opción
	definir @variable = (expresión); 
```
-  Lectura (asignacion desde el ambiente)
```
	pedir (variable)
// Mostrará una ventana con el nombre de la variable y un espacio para rellenar el valor de la variable
```
-  Escritura (muestra en el ambiente)
```
	mostrar @variable
```
-  Funciones o "procedimiento"
```
	procedimiento #nombre @argumento1 y @argumento2
		haz algo (indentacion 4)

	// ejemplo mostrar #multiplicar 2 y 2
```

**Estructuras de control:**
- Condicionales:
  - Simple (if)
  ```
	Si (expresion_logica) 
		(acciones_por_verdadero)
	
  ```
  - Valor por defecto (if... else)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	pero si
		(acciones_por_falso)
	si no
		(acciones_por_falso)
  ``` 

- Bucles:
  - Mientras (while)
  Solo si se cumple la condicion se ejecutará
  ```
	@contador = 5

	repetir si @contador>0
	@contador = @contador - 1
	mostrar @contador
  ```
  - Para (for)
  Se ejecutará un número limitado de veces.
  ```
	@contador = 0
	
	repetir 5 // o repetir nº de veces en una variable
	@contador = @contador + 1
	mostrar @contador
  ```
  - For each
  Se ejecuta por cada elemento en una lista (array).
  ```
	por cada @cosa en @lista
	mostrar @cosa
  ```


### Diagramas de flujo

> El diagrama de flujo o diagrama de actividades es la representación gráfica del algoritmo o proceso. Se utiliza en disciplinas como programación, economía, procesos industriales y psicología cognitiva.

> Estos diagramas utilizan símbolos con significados definidos que representan los pasos del algoritmo, y representan el flujo de ejecución mediante flechas que conectan los puntos de inicio y de fin del proceso. *Fuente: [Wikiwand](https://www.wikiwand.com/es/Diagrama_de_flujo)*


- **Teoría**
![img_simbolos](https://image.jimcdn.com/app/cms/image/transf/dimension=480x10000:format=jpg/path/s37cc796afdd27ec2/image/ib9531583fa25cd50/version/1367814535/image.jpg)


- **Ejemplo**
![img_diagrama](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DiagramaFlujoLampara.svg/440px-DiagramaFlujoLampara.svg.png) 


**Demostración:**
- Problema:
 - Objetivo: Calcular el área de un triángulo
 - Fórmula: (base*altura)/2

- Solución:
 - Pseudocódigo:
 ```
 procedimiento #areaTriangulo @base y @altura
	@baseporaltura = @base*@altura
	devolver @baseporaltura/2

// ejemplo base 2 altura 3

@resultado = #areaTriangulo 2 y 3
mostrar @resultado
 ``` 
 - Código:
 ```javascript
 	
	const baseporaltura = base*altura;
	return baseporaltura/2;
}

// ejemplo base 2 altura 3

resultado = areaTriangulo(2,3);
console.log(resultado);
 ```

### Ejercicios

**1 -** Diseña un programa que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto
```
// DECLARAMOS LAS FUNCIONES QUE LUEGO LLAMAREMOS

procedimiento #suma @a y @b
	devolver @a + @b

procedimiento #resta @a y @b
	devolver @a - @b

procedimiento #multiplica @a y @b
	devolver @a * @b

procedimiento #divide @a y @b
	devolver @a / @b

// PEDIMOS LAS VARIABLES
pedir @numero1
pedir @numero2

// LLAMAMOS LAS FUNCIONES CON LAS VARIABLES

@resultadoSuma = #suma @numero1 y @numero2
mostrar "El resultado de la suma es:"
mostrar @resultadoSuma

@resultadoResta = #resta @numero1 y @numero2
mostrar "El resultado de la resta es:"
mostrar @resultadoResta

@resultadoProducto = #multiplica @numero1 y @numero2
mostrar "El resultado del producto:"
mostrar @resultadoProducto

@resultadoDivision = #divide @numero1 y @numero2
mostrar "El resultado de la division:"
mostrar @resultadoDivision
```

**2 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
pedir @totalhombres
pedir @totalmujeres

procedimiento #mediamujeres @hombres y @mujeres
	
	@total = @hombres + @mujeres
	@mediamujeres = @mujeres/@total
	@mediamujeres = @mediamujeres*100
	devolver @mediamujeres

procedimiento #mediahombres @hombres y @mujeres
	
	@total = @hombres + @mujeres
	@mediahombres = @hombres/@total
	@mediahombres = @mediahombres*100
	devolver @mediahombres

mostrar "La media de mujeres es:"
mostrar #mediamujeres @totalhombres y @totalmujeres
mostrar "La media de hombres es:"
mostrar #mediahombres @totalhombres y @totalmujeres
```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
pedir @numero1
pedir @numero2

si @numero1 > @numero2
	mostrar @numero1
pero si @numero1 < @numero2
	mostrar @numero2
si no
	mostrar "Son iguales"
```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
pedir @numero1
pedir @numero2
pedir @numero3

si @numero1 > @numero2
	si @numero1 > @numero3
		mostrar @numero1
pero si @numero2 > @numero1
	si @numero2 > @numero3
		mostrar @numero2
si @numero3 > @numero1
	si @numero3 > @numero2
		mostrar @numero3
```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
	
pedir @valor1
pedir @valor2
pedir @valor3

si @valor1 < 0
	@calculo = @valor2 + @valor3
	mostrar "El resutlado de la suma es :"
	mostrar @calculo
si no
	@calculo = @valor1 * @valor2 * @valor3
	mostrar "El resutlado de la multiplicacion es: "
	mostrar @calculo
```

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
	pedir @mes
pedir @diasemana
pedir @precio

@descuento = 25*@precio
@descuento = @descuento/100
@precioConDescuento = @precio - @descuento


si @mes == "Diciembre" || @mes == "Enero" || @mes == "Febrero"
	si @diasemana == "Viernes" || @diasemana == "Sabado" || @diasemana  == "Domingo"
		mostrar "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar "
		mostrar @precio
	si no
		mostrar "BINGO! Has acertado de mes y días. Debes pagar solamente "
		mostrar @precioConDescuento
si no
	mostrar "No se aplica descuento.. ven en invierno mejor!. Debes pagar "
	mostrar @precio
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
	pedir @numero

si @numero < 0
	mostrar @numero + " es negativo"
si no
	mostrar @numero + " es positivo"
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
	pedir @numero

si @numero % 2 == 0
	mostrar @numero + " es par"
si no
	mostrar @numero + " es impar"
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	Tu programa aquí
			
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
	Tu Programa aquí
					
```

11 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
	Programa de nota
```

## RECAPITULACIÓN AL PRINCIPIO DEL SIGUIENTE DOCUMENTO
[Teoría da 3](./dia3.md)
```
