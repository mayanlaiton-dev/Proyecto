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
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#ffffff";
        break;

    case "claro":
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        break;

    case "neon":
        document.body.style.backgroundColor = "#ff007f";
        document.body.style.color = "#ffffff";
        break;

    default:
        document.body.style.backgroundColor = "#f0f0f0";
        console.log("Modo no reconocido, usando color por defecto.");
}