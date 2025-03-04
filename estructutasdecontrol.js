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

    

    //imprimir las tablas de multuplicar del numero que el usuario dijite
    let numingresado = prompt("ingrese un numero");
    for (let number =1 ; number <= 10;number ++){
        console.log(numingresado, "x",number,"=",numingresado*number );

    }
        

//ejemplo 1 realizar un programa que determine que dia de la semana es utilizando la funcion prompt

const dia = prompt("digite en dia")

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case "domingo":
    console.log("¡Hoy es domingo! 😴")
    break
  case "lunes":
    console.log("¡Nooo, es lunes! 😢")
    break
  case "martes":
    console.log("¡Hoy es martes! 🥵")
    break
  case "miercoles":
    console.log("¡Hoy es miercoles! 🤓")
    break
  case "jueves":
    console.log("¡Hoy es jueves! 🤓")
    break
  case "viernes":
    console.log("¡Hoy es viernes! 🤓")
    break
  case "sabado":
    console.log("¡Hoy es sabado! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
}



// Programa que dada la edad de una persona indique si es mayor o menor de edad. Se considera mayor de edad a partir de los 18 años.

let nombre = prompt("ingresa tu nombre");
let edad = parseInt(prompt("ingresa tu edad"));

if (edad <= 18){
    console.log (`${nombre}, eres menor de edad`)
}else if (edad >= 18){
    console.log(`${nombre}, eres mayor de edad`)

};


// Dado dos números A y B, determinar si A es mayor, menor o igual que B

let numero1 = parseInt(prompt("ingresa el primer numero"));
let numero2 = parseInt(prompt("ingresa el segundo numero"));

if (numero1 < numero2){
  console.log(`${numero1},es menor que ${numero2}` )
}else if (numero1 > numero2){
  console.log(`${numero1},es mayor que ${numero2}`)
};



// Dado el peso de una persona:a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de Peso; b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso promedio; c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”
let peso = parseInt(prompt("ingresa tu peso"));
switch (true) {
  case (peso <= 40):
    console.log("Persona Baja de peso")
    break
  case (peso >= 41 && peso <= 70):
    console.log("persona peso promedio")
    break
  case (peso >= 71):
    console.log("persona con sobrepeso")
    break
}


// En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál será la cantidad que pagara una persona por su compra?

let valor = parseInt(prompt("ingresa el valor de tu compra"));


if (valor > 1000){
let totalapagar = 0.80 * valor ;
alert(totalapagar)

}else if (valor <=1000){
let totalapagar = 0.95 * valor ;
  alert(totalapagar)
}



// Programa que lea los nombres y edades de dos personas e imprima cuál de ellas tiene más edad.

let nombre1 = prompt("ingresa el nombre");
let edad1 = parseInt(prompt("ingrsa la edad"));
let nombre2 = prompt("ingresa el nombre");
let edad2 = parseInt(prompt("ingrsa la edad"));

if (edad1 > edad2){
  alert(nombre1)
}else if(edad2 < edad1){
  alert(nombre2)
}
  

// 11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.

let numero1 = parseInt(prompt("ingresa un numero"));
let numero2 = parseInt(prompt("ingresa un numero"));


if (numero1 === numero2){
  alert (numero1 * numero2)
}else if (numero1 > numero2){
  alert (numero1 - numero2)
}else if(numero1 < numero2){
 alert (numero1 + numero2)
}


// 13.Escribe un programa que determine si un número ingresado por el usuario es par o impar.

let numero = parseInt(prompt("ingresa un numero"));

if (numero % 2 === 0 ){
  alert ("es par")
}else if (numero % 2 === 1){
  alert("es impar")
}



//15.Crea un programa que solicite un número y verifique si es positivo, negativo o igual a cero.

let numero = parseInt(prompt("ingresa un numero"));

if (numero < 0){
  alert("numero negativo")
} else if (numero > 0){
  alert("numero positivo")
} if (numero === 0){
  alert("numero igual")
}
*/

