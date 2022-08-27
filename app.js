//funcion saludar

function saludar () {
    alert (
        "Hola! bienvenido a nuestra tienda, un placer " +
        nombre + 
        ", te invitamos a mirar nuestros productos"
    );
}

//funcion de la compra

function compra() {
    producto = prompt(
        "Elije el producto que estas buscando: \n 1: Remera \n 2: Pantalon \n 3: Vestido \n 4: Cartera"
    );

    if ( producto === "1") {
        alert("Agregaste Remera a tu compra");
    } else if (producto === "2") {
        alert("Agregaste Pantalón a tu compra");
    } else if (producto === "3") {
        alert("Agregaste Vestido a tu compra");
    } else if (producto === "4") {
        alert("Agregaste Cartera a tu compra");
}
//interactuo para finalizar compra
opcion = prompt (
    "Ingrese una opción \n 2: Mostrar Saldo \n 3: Finalizar"
);

}

//Funcion Finalizar compra

function finalizarCompra (){
    if (producto === "1") {
        alert(
            "Agregó Remera por $" + remera
        );
    } else if (producto === "2") {
        alert(
            "Agregó Pantalon por $" + pantalon
        );
    } else if(producto === "3") {
        alert(
            "Agregó Vestido por $" + vestido
        );
    } else if(producto === "4") {
        alert(
            "Agregó Cartera por $" + cartera
        );
    } 
}

//variables

let producto;
let remera = 1200;
let pantalon = 8000;
let vestido = 5800;
let cartera = 5000;



let nombre = prompt("Ingrese su nombre");
saludar();


let opcion = prompt(
    "ingrese una opcion: \n 1: Realizar la Compra \n 2: Finalizar la compra \n 3: Terminar"
);


for (let i=0 ; i<2 ; i++ ) {
if (opcion === "1") {
    compra();
}else if (opcion === "2") {
    finalizarCompra();
}else if (opcion === "3") {
break;
}
}

alert ("Gracias por su Compra, vuelva pronto")
