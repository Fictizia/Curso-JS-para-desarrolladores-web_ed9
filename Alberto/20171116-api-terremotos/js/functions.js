async function getData(a,b){
    let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    url += '&minmagnitude=' + a;
    url += '&starttime=' + b;
    
    data = await fetch(url);
    dataJson = await data.json();
    
    next = await getEQ(dataJson);
    
}

async function getEQ(a){
    eQuakes = a.features;
    
    next = await showProperties(eQuakes);
}

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


getData(7,20170101); 