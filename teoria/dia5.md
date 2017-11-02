# Asincronía gustaría me aprender

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
