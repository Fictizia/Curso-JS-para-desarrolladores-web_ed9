function complete(name, title, subject, html, schedule, recipients){
    
    postContent = {
        name: name,
        title: title,
        subject: subject,
        html: html,
        schedule: schedule,
        recipients: recipients
    }
    
    sendPOST(postContent)

}

async function sendPOST(content){
    
 
    try {
        
        const misHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        
        let data = await fetch( 'http://192.168.1.67:3000/campaign',
                               {headers: misHeaders,
                               method: 'POST',
                               body:JSON.stringify(content)
                               }           
                               )
         // await data.json();
        console.log(data); //para ver la respuesta del back, que se acumula en data. ahí saldrá el id y demás, que es necesario para luego hacer PUT o DELETE
        
        } catch(error){console.log(error)};
    
}

complete('Alberto888888','Mi campaña','Quiero una campaña','<p>Toma campaña</p>',15825,['Alberto', 'Luis', 'Iván']);
