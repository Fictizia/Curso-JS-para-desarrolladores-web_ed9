const search = document.getElementById('search');
	
search.addEventListener('click', function(event){ //pide ejecutar la llamada a la api por callback
		
    event.preventDefault(); //impide que el click refresque la página, tal como haría por defecto. el event es un parámetro que hace referencia al evento mencionado como primer parámetro del addEventListener, en este caso el 'click'
    let yearOrigin = document.getElementById('years').value;
    let minMagnitude = document.getElementById('magnitudes').value;
		
    getData(yearOrigin,minMagnitude);
});



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

async function getData(year,magnitude){ //hace la petición y convierte el resultado en json
	let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    url += `&minmagnitude=${magnitude}&starttime=${year}0101`;
		await console.log(url);	
	let data = await fetch(url);
	let dataJson = await data.json();
	
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
	});
}


getThisYear();
showMagnitude();


