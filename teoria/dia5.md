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
