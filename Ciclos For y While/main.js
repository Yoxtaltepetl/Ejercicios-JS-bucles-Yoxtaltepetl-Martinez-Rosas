
/* Ejercicio 1
let numeroIngresado = parseInt(prompt("Ingrese la table desea"));

for (let i = 1; i < 11; i++) {
    console.log(numeroIngresado * i);
}
*/

/////////////////////////////////////////////////////////////////////////

/* Ejercicio 2
let numeroIngresado = parseInt(prompt("Ingrese numero"));
const numerosAcumulados = [];
numerosAcumulados.push(numeroIngresado);
console.log(numerosAcumulados);
if(numeroIngresado !== 0){
    for ( let numeroAgregado of numerosAcumulados) {
        numeroIngresado = parseInt(prompt("Ingrese numero"));
        if(numeroIngresado !== 0){
            numeroAgregado = numeroIngresado;
            numerosAcumulados.push(numeroAgregado);
            console.log(numerosAcumulados);
        }
        else{
            console.log("Se ingreso el 0");
        }
    }
}
else{
    console.log("Se ingreso el 0");
}
*/

///////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 3
let adivinanza = Math.floor(Math.random() * 100) + 1;
console.log(adivinanza);
let numeroIngresado = parseInt(prompt("Ingresa un numero"));
let intentos = 0;

while (numeroIngresado !== adivinanza){
    if(numeroIngresado < adivinanza){
        numeroIngresado = parseInt(prompt("El numero es Mayor, intentalo de nuevo"));
        intentos++;
    }
    else if(numeroIngresado > adivinanza){
        numeroIngresado = parseInt(prompt("El numero es Menor, intentalo de nuevo"));
        intentos++;
    }
}
alert("FELICIDADES!! Adivinaste en " + intentos);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 4
let numeroIngresado = parseInt(prompt("Ingresa un numero"));
let contador = 0;
let divisor = 1;

for (let i = 1; i <= numeroIngresado ; i++) {
    if(numeroIngresado % i === 0){
        contador++;
    }    
}

if(contador == 2){
    console.log("El numero es primo")
}
else{
    console.log("No es ptimo");
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 5
let numeroIngresado = parseInt(prompt("Ingresa un numero"));

const divisores = [];

for (let i = 1; i <= numeroIngresado; i++) {
    if(numeroIngresado % i === 0){
        divisores.push(i);
    }
}

console.log("Sus divisores son: " + divisores.toString());
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 6
const paises = ["Mexico","Peru","Colombia","Argentina","Chile","Rusia","Japon","China","Noruega","Canada"];
for (let iterator of numeros) {
    console.log(iterator);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 7
const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let iterator of numeros) {
    console.log(iterator*2);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 8
let padre = {
    nombre: "Pedro",
    edad: 50,
    altura: 1.74,
    ocupacion: "Cocinero",
}

let madre = {
    nombre: "Marta",
    edad: 52,
    altura: 1.54,
    ocupacion: "Profesora",
}

let hijo1 = {
    nombre: "Diego",
    edad: 26,
    altura: 1.74,
    ocupacion: "Ingeniero",
}

let hijo2 = {
    nombre: "Carlos",
    edad: 25,
    altura: 1.74,
    ocupacion: "Abogado",
}

let hijo3 ={
    nombre: "Laura",
    edad: 20, 
    altura: 1.5,
    ocupacion: "Estudiante"
}

let familia = [padre, madre, hijo1, hijo2, hijo3];
console.log(familia);

for(let i=0; i< familia.length; i++){
    let mensaje = "Hola mi nombre es " + familia[i].nombre + ", tengo " + familia[i].edad + " años de edad, mido " + familia[i].altura + "m de altura y actualmente soy " + familia[i].ocupacion ;
    console.log(mensaje);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejericio 9
let numeros = [1,2,3,4,5,6,7,8,9,10];

for (const iterator of numeros) {
    let resultado = iterator % 2;
    if (resultado === 0) {
        console.log(iterator + " es un numero par");
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 10
let numeroIngresado = parseInt(prompt("Ingrese numero"));
const numerosAcumulados = [];
let sumaPares = 0;
let sumaImpares = 0;
console.log(numerosAcumulados);
if(numeroIngresado !== 0){
    numerosAcumulados.push(numeroIngresado);
    
    for ( let numeroAgregado of numerosAcumulados) {
        numeroIngresado = parseInt(prompt("Ingrese numero"));
        if(numeroIngresado !== 0){
            numeroAgregado = numeroIngresado;
            numerosAcumulados.push(numeroAgregado);
            
        }
        else if(numeroIngresado===0){
            for(let i=0; i< numerosAcumulados.length; i++){
                let residuo = numerosAcumulados[i] % 2;
                if(residuo == 0 ){
                    sumaPares = sumaPares + numerosAcumulados[i];
                }
                else if(residuo !== 0){
                   sumaImpares = sumaImpares + numerosAcumulados[i];     
                }
            }
            console.log("La suma de los numeros pares es: " + sumaPares);
            console.log("La suma de los numeros impares es: " + sumaImpares);
        }
    }
}
else{
    console.log("No ingreso ningun numero");
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 11
const numeros = [1,2,3,4,5,11,7,8,9,10];

let numeroMayor = 0;
for (let numero of numeros) {
    if (numeroMayor < numero) {
        numeroMayor = numero
    }
}
console.log(numeroMayor);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 12
const numeros = [13,22,34,45,56,11,7,8,9,10];

let numeroMenor = numeros[0];
for (let numero of numeros) {
    if (numeroMenor > numero) {
        numeroMenor = numero
    }
}
console.log(numeroMenor);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio13

let jugador1 = prompt("Jugador 1 ingresa tu nombre");
let jugador2 = prompt("Jugador 2 ingresa tu nombre");
let eleccionJugador1 = prompt("Jugador uno elije");
let eleccionJugador2 = prompt("Jugador 2 elije");

while(eleccionJugador1 === eleccionJugador2){
    alert("Hubo un empate");
    eleccionJugador1 = prompt("Jugador 1 elije");
    eleccionJugador2 = prompt("Jugador 2 elije");
}

if(eleccionJugador1=== "piedra" && eleccionJugador2=== "tijeras"){
    console.log("El ganador es " + jugador1);
}

else if(eleccionJugador1=== "tijeras" && eleccionJugador2=== "tijeras"){
    console.log("El ganador es " + jugador1);
}

else if(eleccionJugador1=== "papel" && eleccionJugador2=== "piedra"){
    console.log("El ganador es " + jugador1);
}

else if(eleccionJugador2=== "piedra" && eleccionJugador1=== "tijeras"){
    console.log("El ganador es " + jugador2);
}

else if(eleccionJugador2=== "tijeras" && eleccionJugador1=== "papel"){
    console.log("El ganador es " + jugador2);
}

else if(eleccionJugador2=== "papel" && eleccionJugador1=== "piedra"){
    console.log("El ganador es " + jugador2);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/*ejercicio 14
let figura = "*";
let triangulo = ""
for(let i=1; i<=5; i++){
    triangulo += figura;
    console.log(triangulo);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/*Ejercicio 15
let figura = "******";
let triangulo = ""
for(let i=0; i<5; i++){
    triangulo = figura.slice(0, triangulo.length - 1);
    console.log(triangulo);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

/* Ejercicio 16
const numeros = [4,6,3,9,8,2,5,10,1,7]

for(let i=0; i < numeros.length; i++){
    for(let x=0; x < numeros.length; x++){
        if(x+1 !== numeros.length){
          if(numeros[x] > numeros[x+1]){
                let cambioNumeros = numeros[x+1];
                numeros[x+1] = numeros[x];
                numeros[x] = cambioNumeros;
            }
        }  
    }
}
console.log(numeros);
*/

