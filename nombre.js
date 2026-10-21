alert("¡Hola, como estas!");

let nombre = "Mayan";

function saludo(nombrePersona) {
    console.log("Hola " + nombrePersona);
}

saludo(nombre);

let tituloPestaña = document.querySelector("title");
let tituloWeb = document.querySelector("h1");
let titulotexto = document.querySelector("p");
let titulofooter = document.querySelector(" footer p");


let modoColor = "oscuro";

switch (modoColor) {
    case "oscuro":
        console.log("Cambiando fondo a negro...");
        break;

    case "claro":
        console.log("Cambiando fondo a blanco...");
        break;

    case "neon":
        console.log("Cambiando fondo a colores brillantes...");
        break;

    default:
        console.log("Modo no reconocido, usando color por defecto.");
}