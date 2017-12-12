const suma = function (a,b){
    return a+b;
}
function resta(a,b){
    return a-b;
}
function producto(a,b){
    return a*b;
}

suma(1,2);

// metodo espartano de crear un objeto
const jose1 = {
                name: "Jose",
                age:34,
                capacidad: suma, // suma es una funcion declarada arriba
                otracapacidad: function(a,b){return a*b/2 }, // declaro otracapacidad al vuelo aquí mismo
                };

console.log (jose1);
console.log(jose1.age);

const algo = jose1.capacidad(1,2);
const mascosas = jose1.otracapacidad(2,3);

console.log(algo);
console.log(mascosas);

// una clase es una plantilla de como debería ser un objeto
// contiene propiedades como edad, altura, numero de ruedas, si tiene pelo o no...
// también tiene acciones (metodos) andar,correr,toser, gritar, acelerar...

class Persona {
    constructor(name,age,capacidad){
        this.name = name;
        this.age = age;
        this.capacidad = capacidad
       
    }
}

const jose = new Persona("Jose",34,suma); // nueva persona jose, con las variables nombre: "Jose", edad: 34, hablidad: suma (un metodo o funcion)
const jacinto = new Persona("Jacinto",26,resta);

console.log(jose);
console.log(jacinto);

const restaDeJacinto = jacinto.capacidad(2,1);
const sumaDeJose = jose.capacidad(22,21);

console.log(restaDeJacinto);
console.log(sumaDeJose);

// declaremos una clase que va a ser extendida por otra..
class Vehiculo{ 
    constructor(motor,funcion1,funcion2){
        this.motor = motor;
        this.function1 = funcion1;
        this.function2 = funcion2;

    }
}    

function acelerar(){
    // brum brum
    return true
}

function frenar(){
    // soooooo
}

const moto = new Vehiculo(20,acelerar,frenar);


// coche heredará de Vehiculo propiedades y metodos
class Coche extends Vehiculo{
    
        constructor(motor,funcion1,ruedas){ // pero si queremos no tenemos porque heredar todo, como funcion2
            super (motor,funcion1); // hay que llamar a super, con los parametros que hayamos usado en el contructor y pertenezcan a vehiculo
            this.funcion1 = function(){console.log("brum,brum,requetebrum")};
            this.ruedas = ruedas;
        }
}

const coche = new Coche(30,acelerar,frenar,4);
console.log(coche);
