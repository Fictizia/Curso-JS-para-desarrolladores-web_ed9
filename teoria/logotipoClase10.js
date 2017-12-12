async function get(url) {
    
    // pintame un gif en alguna parte
    let algunaparte = document.getElementById('pizarra');
    algunaparte.innerHTML = '<img src="urldelgif">'
    const data = await fetch(url);
    const dataJson = await data.json()
    // await o no deja de pintarme un gif en alguna parte
    pinta(dataJson);
}