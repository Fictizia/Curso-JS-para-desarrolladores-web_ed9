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
	Proceso calcularDescuento
	    Escribir "¿En que mes estamos?"
	    Leer mes
		
	    Escribir "¿En que día estamos?"
	    Leer diaSemana
		
	    Escribir "¿Cuanto vale el producto?"
	    Leer precio	
		
		descuento <- 25*precio/100
		precioConDescuento <- precio - descuento
		
		
		Si mes = "Diciembre" | mes = "Enero" | mes = "Febrero"  Entonces
			Si diaSemana = "Viernes" | diaSemana = "Sabado" | diaSemana  = "Domingo"  Entonces
				Escribir "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar ", precio
			Sino
				Escribir "BINGO! Has acertado de mes y días. Debes pagar solamente ", precioConDescuento
			Fin Si
		Sino 
			Escribir "No se aplica descuento.. ven en invierno mejor!. Debes pagar ", precio		
		FinSi
	
	FinProceso
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
	 Proceso esPositivo
		Escribir "Dame un número:"
		Leer numero
		
		Si numero < 0 Entonces
			Escribir numero, " es negativo"
		Sino 
			Escribir numero, " es positivo"
		FinSi
	
	FinProceso
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
	Proceso esPar
		Escribir "Dame un número:"
		Leer numero
		
		Si numero %2 = 0 Entonces
			Escribir numero, " es par"
		Sino 
			Escribir numero, " es impar"
		FinSi
	
	FinProceso
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	Proceso eureka
		clave <- "Fictizia mola mucho"
		acierto <- FALSO
		contador <- 0
		
		Mientras contador < 3 & acierto = FALSO Hacer
			Escribir "Dime el secreto:"
			Leer secreto
			
			Si secreto = clave Entonces
				acierto <- VERDADERO
				Escribir secreto, " es la clave que esperaba!"
			Sino
				Escribir secreto, " no es correcto."
			Fin Si
			
			contador<- contador+1
			
		Fin Mientras
		
		Si contador >= 3 Entonces
			Escribir "Lo siento... pero has agotado los 3 intentos."
		Fin Si
	
	FinProceso
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
	Proceso verificadorDeFechas
		
		Escribir "Dime el Año:"
		Leer year
		
		Escribir "Dime el Mes:"
		Leer month
		
		Escribir "Dime el Dia:"
		Leer day
		
		fecha <- ConvertirATexto(day) + "/" + ConvertirATexto(month) + "/" + ConvertirATexto(year)
	
		Si day <= 31 & day > 0 & month <= 12 & month > 0 & year > 0  Entonces
			Escribir "La fecha es correcta ", fecha
			
			Segun month Hacer
				1:
					fechaDetalle <- ConvertirATexto(day) + "de Enero de " + ConvertirATexto(year)
				2:
					fechaDetalle <- ConvertirATexto(day) + "de Febrero de " + ConvertirATexto(year)
				3:
					fechaDetalle <- ConvertirATexto(day) + "de Marzo de " + ConvertirATexto(year)
				4: 
					fechaDetalle <- ConvertirATexto(day) + "de Abril de " + ConvertirATexto(year)
				5:
					fechaDetalle <- ConvertirATexto(day) + "de Mayo de " + ConvertirATexto(year)
				6:
					fechaDetalle <- ConvertirATexto(day) + "de Junio de " + ConvertirATexto(year)
				7:
					fechaDetalle <- ConvertirATexto(day) + "de Julio de " + ConvertirATexto(year)
				8:
					fechaDetalle <- ConvertirATexto(day) + "de Agosto de " + ConvertirATexto(year)
				9:
					fechaDetalle <- ConvertirATexto(day) + "de Septiembre de " + ConvertirATexto(year)
				10:
					fechaDetalle <- ConvertirATexto(day) + "de Octubre de " + ConvertirATexto(year)
				11: 
					fechaDetalle <- ConvertirATexto(day) + "de Noviembre de " + ConvertirATexto(year)
				12:
					fechaDetalle <- ConvertirATexto(day) + "de Diciembre de " + ConvertirATexto(year)
			Fin Segun
			
			Escribir "La fecha en otro formato: ", fechaDetalle
			
		Sino
			Escribir "Error! los datos no son correctos!"
		Fin Si
		
	FinProceso
```

11 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
	Proceso conversionRomana
		Escribir "Dame un número:"
		Leer numero
		
		numeroOriginal <- numero
		numeroRomano <- ""
		
		Si numero <= 50 & numero > 0 Entonces
			
				Mientras numero > 0 Hacer
					// Escribir "Numero: ", numero
					
					Si numero = 50 Entonces
						numeroRomano = "L"
						numero = 0
					Fin Si
					
					Si numero >= 40 & numero < 50 Entonces
						numeroRomano = numeroRomano + "XL"
						numero = numero - 40
					Fin Si
					
					Si numero >= 10 & numero < 40 Entonces
						numeroRomano = numeroRomano + "X"
						numero = numero - 10
					Fin Si	
					
					Si numero = 9 Entonces
						numeroRomano = numeroRomano + "IX"
						numero = numero - 9
					Fin Si		
					
					Si numero = 8 Entonces
						numeroRomano = numeroRomano + "VIII"
						numero = numero - 8
					Fin Si	
					
					Si numero = 7 Entonces
						numeroRomano = numeroRomano + "VII"
						numero = numero - 7
					Fin Si	
					
					Si numero = 6 Entonces
						numeroRomano = numeroRomano + "VI"
						numero = numero - 6
					Fin Si	
					
					Si numero = 5 Entonces
						numeroRomano = numeroRomano + "V"
						numero = numero - 5
					Fin Si	
					
					Si numero = 4 Entonces
						numeroRomano = numeroRomano + "IV"
						numero = numero -4
					Fin Si
					
					Si numero <= 3 & numero > 0 Entonces
						numeroRomano = numeroRomano + "I"
						numero = numero - 1
					Fin Si		
					
				Fin Mientras
				
				Escribir numeroOriginal " en números romanos es " numeroRomano
		Sino
			Escribir numeroOriginal " NO es un número valido (0-50)"
		Fin Si
		
	FinProceso
```
