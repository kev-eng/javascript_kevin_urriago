/*
let nombre = prompt("ingresa el nombre");
let edad = parseInt(prompt("ingrsa la edad"));

if (edad <= 18){
    alert (`${nombre}, eres un joven`)
}else if (edad >= 41){
    alert (`${nombre}, eres un adulto`)
}else if (edad <= 61){
    alert (`${nombre}, eres un maduro`)
}else if (edad >=61){
    alert (`${nombre}, eres un anciano`)
};


let cuentahaciatras = parseInt(prompt("ingrese un numero"));
while (cuentahaciatras >0){
    alert (cuentahaciatras)
    cuentahaciatras = cuentahaciatras --
}
    

//ejemplo do while= imprimir 5 edades diferentes personas y determinar si sonmayores

let persona =0
do{
    let nombre = (prompt("ingrese su nombre"))
    let edad = parseInt(prompt("ingrese tu edad"))
    if(edad>=18){
        alert(nombre +"eres mayor de edad");
    
    }else{
        alert(nombre +"eres menor de adad");
    }
    persona++;
}while(persona>5)

    alert("se registraron" + persona + "personas");
    alert("fin del programa");

    */

    //imprimir las tablas de multuplicar del numero que el usuario dijite
    let numingresado = prompt("ingrese un numero");
    for (let number =1 ; number <= 10;number ++){
        console.log(numingresado, "x",number,"=",numingresado*number );

    }