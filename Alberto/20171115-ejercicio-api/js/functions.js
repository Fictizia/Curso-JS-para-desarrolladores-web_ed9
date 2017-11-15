async function getData(){
	let url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json"
	let data = await fetch(url);
	let dataJson = await data.json();
	console.log(dataJson);
	return dataJson;
}

