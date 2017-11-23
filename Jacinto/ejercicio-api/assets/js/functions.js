const find = document.getElementById("search");

const cacheUser = cacheJS.use('array');

find.addEventListener("click", function(){
    
    async function processRequest(pokemon){

        if(pokemon != ""){
            
            if(cacheUser.get(pokemon)){
                writePokemonInfo(cacheUser.get(pokemon));
            }
            else{
                const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
                console.log(url);
                try {
                    const data = await fetch(url, {mode: 'cors'});
                    const objJson = await data.json();
                    console.log(objJson);
                    clearScreen();
                    if(objJson.detail){
                        writeWarning("Pokemon does not exist.");
                    }
                    else{
                        const objPokemon = createPokemonObject(objJson);
                        cacheUser.set(pokemon, objPokemon, 3600);
                        writePokemonInfo(objPokemon);
                    }
                }catch(error){
                    console.log(error);
                    writeError("GET API ERROR!")
                }
            }
         }
        else {
            writeError("You must write a Pokemon name");
        }
    }

    let pokemon = document.getElementById("pokemonName").value;
    processRequest(pokemon);
});


function writeError(text){
    const messageContainer = document.getElementById('message');
    messageContainer.innerHTML = `
        <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Error: </strong>${text}</div>`;
}


function writeWarning(text){
    const messageContainer = document.getElementById('message');
    messageContainer.innerHTML = `
        <div class="warning">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Warning: </strong>${text}</div>`;
}


function createPokemonObject(json){
    let pokemon = {};

    const types = json.types;
    const pokemonTypes = types.map(function(elem){
         return elem.type.name + ` `;
    });

    pokemon.name = json.name;
    pokemon.imageDefault = json.sprites.front_default;
    pokemon.id = json.id;
    pokemon.specie = json.species.name;
    pokemon.weight = json.weight;
    pokemon.height = json.height;
    pokemon.types = pokemonTypes;

    return pokemon;
}


function writePokemonInfo(objPokemon){
    
    const info = document.getElementById('results');
    
    let tableCode = `
    <table class="table table-striped table-bordered">
    <tr>
      <th colspan="2">Pokemon info</th>
    </tr>
    <tr>
      <td><img src=${objPokemon.imageDefault} alt="Pokemon image"></td>
      <td><strong>Pokedex order: </strong> ${objPokemon.id}</td>
    </tr>
    <tr>
        <td><strong>Name: </strong> ${objPokemon.name}</td>
        <td><strong>Species: </strong> ${objPokemon.specie}</td>
    </tr>
    <tr>
        <td><strong>Weight: </strong> ${objPokemon.weight}</td>
        <td><strong>Types: </strong> ${objPokemon.types}</td>
    </tr>
    <tr>
        <td><strong>Height: </strong> ${objPokemon.height}</td>
    <td></td>
    </tr>
  </table>`;
  info.innerHTML = tableCode + info.innerHTML;
  return tableCode;
}


function clearScreen(){
    //document.getElementById('results').innerHTML = "";
    document.getElementById('message').style.display = 'none';
}

