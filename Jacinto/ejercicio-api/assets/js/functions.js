function processRequest(){

    clearScreen();
    var pokemon = document.forms[0].elements[0].value;

    if(pokemon != ""){
        
        var init = { 
                method: 'GET',
                mode: 'cors',
                cache: 'default' 
            };
    
        const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
        console.log(url);
        fetch(url, init)
            .then(function(response){
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                writePokemonInfo(json);
            })
            .catch(function(error) {
                console.log(error);
                writeErrorOrWarning(1, "Pokemon does not exist.")
            }); 
    }
    else {
        writeErrorOrWarning(0, "You must write a Pokemon name");
    }
    
}

function writeErrorOrWarning(flag, text){
    const messageContainer = document.getElementById('message');

    if(flag === 0){
        messageContainer.innerHTML = `
        <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Error</strong>.` + text + 
        `</div>`;
        return;
    }
    
    if(flag === 1){
        messageContainer.innerHTML = `
        <div class="warning">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Warning</strong>.` + text + 
        `</div>`;
        return;
    }
    
}


function writePokemonInfo(json){
    const info = document.getElementById('results');
    let tableCode = '';
    tableCode = `
    <table class="table table-striped table-bordered">
    <tr>
      <th colspan="2">Pokemon info</th>
    </tr>
    <tr>
      <td><img src=${json.sprites.front_default} alt="Pokemon image"></td>
      <td><strong>Pokedex order: </strong> ${json.order}</td>
    </tr>
    <tr>
        <td><strong>Name: </strong> ${json.name}</td>
        <td><strong>Species: </strong> ${json.species.name}</td>
    </tr>
    <tr>
        <td><strong>Weight: </strong> ${json.weight}</td>
        <td><strong>Types: </strong>`;
        json.types.forEach(function(elem){
            tableCode += elem.type.name + ` `;
        });
    tableCode += `</td>
    </tr>
    <tr>
        <td><strong>Height: </strong> ${json.height}</td>
    <td></td>
    </tr>
  </table>`;
  info.innerHTML = tableCode;
}

function clearScreen(){
    document.getElementById('results').innerHTML = "";
    document.getElementById('message').innerHTML = "";
}