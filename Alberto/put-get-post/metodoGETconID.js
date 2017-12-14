function complete(id){
    
    content = {
        id: id,
    }
    
    sendGET(id)

}

async function sendGET(id){
    
 
    try {
        
        const misHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        
        let url = 'http://192.168.1.67:3000/campaign/'
        url += id;
        
        let data = await fetch( url,
                               {headers: misHeaders,
                               method: 'GET',
                               }           
                               )
         // await data.json();
        let dataJSON = data.json() 
        
        console.log(dataJSON)
        
        } catch(error){console.log(error)};
    
}

complete('5a206712c49f6c47dbbfb80b');
