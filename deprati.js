// Richard Padilla
// De la pagina https://www.deprati.com.ec/es/sudaderas/c/0220

// Variables const y let
let cantidadStock = 2 
let tallas = ["S","L","M","XL"]
const color = "negro" 


// String
let nombre = "Sudadera Estampada Levi’s"
let estadoProducto = true     
let precio = 89.99  
const seccion = "Hombre"
let categoria = "Sudaderas"


// Metodos
console.log(" --- Bienvenido a Deprati --- ".toUpperCase()) 
console.log(`Escogiste la seccion ${seccion} y la categoria ${categoria}.`) 
console.log(`La ${nombre} tiene un precio de $ ${precio} y pertenece a la categoria ${categoria}.`) 


// Template literals 
console.log(`El producto ${nombre.toUpperCase()} está disponible en color ${color} y su estado es ${estadoProducto ? "activo" : "inactivo"}.`)


// Condicionales
if(cantidadStock > 0){
    console.log(`El producto ${nombre.toUpperCase()} esta disponible en las siguientes tallas: ${tallas.join(", ")}`)
} else {
    console.log(`El producto ${nombre.toUpperCase()} no esta disponible en este momento.`)
}


// Operador ternario
let tallaSeleccionada = "S"; 

console.log(
    (tallaSeleccionada === "S" || tallaSeleccionada === "XL") 
        ? `La talla ${tallaSeleccionada} no esta disponible.` 
        : `La talla ${tallaSeleccionada} esta disponible.`
);


// Booleano
let esProductoNuevo = true;
console.log(`El producto ${nombre.toUpperCase()} es ${esProductoNuevo ? "nuevo" : "usado"}.`)


// fundamentos y this
const cliente = {
    nombre: "Richard",
    notificacion: function () {
    setTimeout(() => {
        console.log("Haz ralizado una compra hoy! " + this.nombre)
        }, 1000);
    },
}
cliente.notificacion() 


// Argumentos y parametros
function retiro(tipoRetiro1,tipoRetiro2){
    
    return "Puede retirar a "+ tipoRetiro1 + " o en " + tipoRetiro2
}

console.log(retiro('domicilio','tienda'))