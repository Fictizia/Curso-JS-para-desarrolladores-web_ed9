/*
3 MANERAS DE SACAR UN ID DE UNA URL, PORQUE LA API NO NOS DEVUELVE EL ID :(

PERO COMO KATA ESTÁ FENOMENAL.

*/


// presupongo que solo quiero el ultimo numero detras /

const url = "https://swapi.co/api/people/125555558885555";

const id2 = url.slice(28)
console.log(id2);


let id='';

for(var i=28;i<url.length;i++){
    id += url[i];
}
console.log (id)


let id3 = url.split('/');
let index = id3.length - 1;
console.log(id3[index]); 






const perritos = ["buldog","pastor aleman","dogo","conejero"];
                    //0            1           2       3
perritos.forEach(function(perro,indice){
    console.log(perro," : ",indice);
})

perro = perritos[0]
perro = perritosw[1]

// DIFERENCIA ENTRE UNA FUNCION Y UN METODO
/*
FUNCION NO HACE REFENCIA A NINGUN OBJETO EN PARTICULAR NECESARIAMENTE
METODO ES UNA FUNCION CONTENIDA EN UN OBJETO, Y HACE REFERENCIA AL OBJETO QUE LA CONTIENE


GETDATA(URL); <- FUNCION


DATA.BORRAME(1) <- METODO 

*/
