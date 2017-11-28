function getThisYear(){  //extrae el año actual
	let today = new Date(); //devuelve la fecha de hoy
	let thisYear = today.getFullYear(); //extrae el año de today
	
	showYears(thisYear); //llama a la siguiente función
	}

function showYears(upToThisYear){ //muestra en el select los años desde 1990 hasta la actualidad
	
	let allYears = [] //nuevo array donde almacenar los años
	
	for (i=1990; i <= upToThisYear; i++){
		allYears.push(i); //cada iteración llenará el array con un año
	}
	
	allYears.reverse();
    
    let yearSelect = document.getElementById('years');
	
    allYears.forEach( function(yearInAllYears){ //para cada año del array, añade un option al select
        
        yearSelect.innerHTML += `<option value="${yearInAllYears}"> ${yearInAllYears} </option>`
    } );
 	
}

function showMagnitude(){ //muestra las opciones del select de magnitudes
	let magnitudes = [1,2,3,4,5,6,7,8];
	
	let selectMagnitudes = document.getElementById('magnitudes');
	
	magnitudes.forEach( function(magnitudeInMagnitudes){
		selectMagnitudes.innerHTML += `<option value="${magnitudeInMagnitudes}">${magnitudeInMagnitudes}</option>`
	})
}

function dataQuery(callback){ //recoge las opciones señaladas al pulsar "buscar" 
	
	const search = document.getElementById('search');
	
	search.addEventListener('mouseover', function(){ //pide ejecutar la llamada a la api por callback
		
		let yearOrigin = document.getElementById('years').value;
		let minMagnitude = document.getElementById('magnitudes').value;
		
		callback(yearOrigin,minMagnitude);
	})

}

async function getData(year,magnitude){ //hace la petición y convierte el resultado en json
	let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    url += `&minmagnitude=${magnitude}&starttime=${year}0101`;
		await console.log(url);	
	data = await fetch(url);
	dataJson = await data.json();
	
	await console.log(dataJson);
	await showData(dataJson);
	
}

function showData(data){
	
	eQuakes = data.features;
	placeToShow = document.getElementById('data');
	
	placeToShow.innerHTML = `<h3>Encontrados ${eQuakes.length} terremotos</h3>`
	
	eQuakes.forEach( function(eQuakeInEquakes){
		placeToShow.innerHTML += `
		<ul><li>Fecha: ${eQuakeInEquakes.properties.time}</li>
		<li>Localización: ${eQuakeInEquakes.properties.place}</li>
		<li>Magnitud: ${eQuakeInEquakes.properties.mag}</li>
		<li>MMI: ${eQuakeInEquakes.properties.mmi}</li>
		<li><a href="${eQuakeInEquakes.properties.url}">Link al evento</li></ul>
		`
	})
	
}


getThisYear();
showMagnitude();
dataQuery(getData);



/*
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