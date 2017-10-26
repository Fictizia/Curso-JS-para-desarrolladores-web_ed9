function tablaMultiplicar(num){
    console.log("TABLA DE MULTIPLICAR DEL " + num);
    for(var i = 1; i <= 10; i++){
        console.log(num + " X " + i + " = " + num*i);
    }
    console.log("\n");
}


for(var cont = 1; cont <= 10; cont++){
    tablaMultiplicar(cont);
}