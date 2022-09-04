
//creador de objetos
class Productos{
    constructor(categoria, precio, talle){
        this.categoria = categoria;
        this.precio = precio;
        this.talle = talle;
    }
}

//array de precios
let precio =[
    {categoria: "Remera", precio: "1200"  },
    {categoria: "pantalon", precio: "8000"},
    {categoria: "vestido", precio: "5800" },
    {categoria: "cartera", precio: "5000" },
    
];


function ingresarProducto(arrayProductos){
    
    let categoria = prompt("Ingrese el tipo de prenda que quiere comprar: \n Remera $1200 \n Pantalon $8000 \n Vestido $5800 \n Cartera $5000");
    let precio = Number(prompt("Ingrese el precio"));
    let talle = prompt("Ingrese el talle");


//creo new producto
const productoIngresado = new Productos (categoria, precio, talle);

//agrego el producto al array
arrayProductos.push(productoIngresado);
alert("Su producto fue ingresado con éxito");

}



// funcion producto cargados
function productosElegidos(){
arrayProductos.forEach((mercaderia) =>{ 
    alert(`Acaba de elegir ${mercaderia.categoria} por un valor de $ ${mercaderia.precio}`
    );
        });
}

//reduce

function finalizarCompra(){
    const total = arrayProductos.reduce((acc, el) => acc + el.precio, 0);
    alert(`Gracias por su compra, debe abonar $ ${total}`);

}

function oferta(){
    const ofertas = precio.filter((el) => el.precio < 5800);
    for (const oferta of ofertas){
        alert(
            "Oferta del día" + oferta.categoria + "$" + oferta.precio
        );
    };
}



let arrayProductos = [];

let opcion = prompt(
    "ingrese una opcion: \n 1: Elegir Productos \n 3:Finalizar compra \n 4: Salir" );

//realizo ciclo

while(opcion !== "4") {
    if (opcion === "1") {
        ingresarProducto(arrayProductos);
    }if (opcion === "2") {
        productosElegidos(arrayProductos);
    }if (opcion ==="3"){
        finalizarCompra(arrayProductos);
    }if (opcion === "5") {
        oferta(arrayProductos);
    }
    opcion = prompt ("Ingrese una opcion: \n 1:Elija otro producto \n 2: Mostrar carrito \n 3: Finalizar compra \n 5: Oferta del dia \n 4: Salir");
    }


