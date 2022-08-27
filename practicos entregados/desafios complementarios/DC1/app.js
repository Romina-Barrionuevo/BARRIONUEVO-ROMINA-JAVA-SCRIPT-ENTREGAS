//DESAFIO COMPLEMENTARIO CLASE 3 CICLOS E ITERACIONES//

/* CREAR UN ALGORITMO UTILIZANDO UN CICLO

NOTA******************************************************************************
para ver mi resolucion SACAR COMENTARIOS en las respuestas


 //////////////////////////////////////////////////////////////////////////////////////////////////////

*/

//>>>Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado

//opcion uno
let numero = parseInt(prompt("ingrese un numero"))

for(let i=0; i<=5 ; i++){
    let resultado = numero + i;
    console.log(`${numero} + ${i} = ${resultado}`);
}

/*
opcion 2
let numero = parseInt(prompt("ingrese un numero base"))

for(let i=0; i<10 ; i++){
    let numero2 = parseInt(prompt("ingrese numero a sumar"));
    resultado = numero + numero2;
    console.log(`${numero} + ${numero2} = ${resultado}`);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
 /*>>>Pedir un texto mediante prompt, concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC”.*/
/*
let inicio = prompt("ingrese palabra a concatenar o ESC para interrumpir: ");

let texto = " ";

while (inicio != "ESC" && inicio != "esc") {
    texto += inicio + " ";
    inicio = prompt("ingrese palabra a concatenar o ESC para interrumpir: ")
}
alert(texto);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*>>Pedir número mediante prompt y sumarle otro número en cada repetición, 
realizando una salida por cada resultado*/
/*
let cantidad = parseInt(prompt("ingrese un numero de veces a repetir",0))

for (let i = 0; i < cantidad; i++) {
        alert("hola");
}
*/