let buscar = document.getElementById('buscar');
buscar.addEventListener('click',function(){
let valor = document.getElementById('anio').value;
alert(valor);
})




function collectQuery(){
    year = document.eqForm.anio.value;
    alert('Hola');
    getData(year);
}



async function getData(b){
    let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    //url += '&minmagnitude=' + a;
    url += '&starttime=' + b + '0101';
    
    data = await fetch(url);
    dataJson = await data.json();
    
    await getEQ(dataJson);
    
}

async function getEQ(a){
    eQuakes = a.features;
    
    await showProperties(eQuakes);
}


/* MEDIANTE BUCLE FOR 
async function showProperties(a){    
    for (i=0; i<= a.length; i++){
        document.write(`
            <ul>
                <li>Terremoto ${i+1}: </li>
                <li>Magnitud: ${a[i].properties.mag}</li>
                <li>Localización: ${a[i].properties.place}</li>
            </ul>
            `)
    }
}

*/



/* MEDIANTE FOR EACH */

async function showProperties(a){ 
    // tenemos un array, con objetos dentro
    // cada elmento del array quiero pintar
    // elemento.properties.mag
    // elemento.properties.place
    
    
    a.forEach(function(terremotoEnArray,index){
       document.write(`
            <ul>
                <li>Terremoto ${index+1}: </li>
                <li>Magnitud: ${terremotoEnArray.properties.mag}</li>
                <li>Localización: ${terremotoEnArray.properties.place}</li>
            </ul>
            `)
    })
}


//getData(7,20170101); 