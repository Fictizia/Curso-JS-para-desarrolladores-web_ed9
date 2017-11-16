/*async function getData(){
	let url = 'http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?name=Madrid&api-key=fc81a13f715849dba713a8d7e606183c';

	let data = await fetch(url, {
      method: "GET",
      headers: {'Access-Control-Allow-Origin': '*'}
    });
	//let dataJson = await data.json();
	console.log(data);
}

let a = getData();
*/


/*

var url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
url += '?' + $.param({
  'api-key': "fc81a13f715849dba713a8d7e606183c"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

*/

cityName = 'Madrid';

//gets the name of a city

function getCityName(a){
    let el = document.getElementById('button-1');
    el.addEventListener('mouseover', function(){
        let cityName = document.getElementById('city-name-1');
        console.log(cityName);
    })
    
}

/*
//gets data from NYT
async function getData(a){
    let url = "https://api.nytimes.com/svc/semantic/v2/geocodes/query.json";
    url += `?name=${a}` + '&api-key=fc81a13f715849dba713a8d7e606183c';

    let data = await fetch(url);
    let dataJson = await data.json();
}

getData(cityName);*/