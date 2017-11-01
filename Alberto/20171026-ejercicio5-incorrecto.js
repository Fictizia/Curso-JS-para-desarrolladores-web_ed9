var num

impares();

function impares(){
    
    if ( num%2 ==  0 ){
        for ( i=0; i<50; i++ ){
            if ( i%2 == 0 ){
                console.log( num + (i + 1) );  
            }
            
        }

    }
    else{
        for ( i=0; i<50; i++ ){
            if ( i%2 != 0 ){
                console.log( num + (i + 1) );  
            }
            
        }
    }
}