function complete(name, title, miID){
    
    putContent = {
        name: name,
        title: title,
    }
    

    sendPUT(putContent, miID)

}

async function sendPUT(content, id){
    
 
    try {
        
        let url = 'http://192.168.1.67:3000/campaign/' + id
        
        const misHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        
        let data = await fetch( url,
                               {headers: misHeaders,
                               method: 'PUT',
                               body:JSON.stringify(content)
                               }           
                               )
         // await data.json();
        console.log(data); //para ver la respuesta del back, que se acumula en data
        
        } catch(error){console.log(error)};
    
}

complete('Maria de los Dolores','Mi campaña', '5a206712c49f6c47dbbfb80b' );
