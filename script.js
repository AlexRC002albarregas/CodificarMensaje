let body = document.getElementsByTagName("body")[0]
let imagen = document.createElement("img");
let imagenes = ["imagen1.jpg","imagen2.jpg","imagen3.jpg"]


function cifrarMensaje() {
    const mensajeOriginal = window.prompt("Ingrese el mensaje a cifrar:");
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    let mensajeCifrado = "";

    
    for (let i = 0; i < mensajeOriginal.length; i++) {
        const caracter = mensajeOriginal[i];

        if (caracter === " ") {
            mensajeCifrado += " ";
        } else if (caracter === "Z" || caracter === "z") {
            mensajeCifrado += "A";
        } else if (caracter >= "0" && caracter < "9") {
            const digitoCifrado = String.fromCharCode(caracter.charCodeAt(0) + 1);
            mensajeCifrado += digitoCifrado;
        } else if (caracter === "9") {
            mensajeCifrado += "0";
        } else {
            const letraCifrada = String.fromCharCode(caracter.charCodeAt(0) + 1);
            mensajeCifrado += letraCifrada;
        }
    }
    mensajeCifrado = mensajeCifrado.toUpperCase();

    resultado.textContent = `Resultado codificado: ${mensajeCifrado}`;
}

function generarNumeroAleatorio(maximo) {
    return Math.floor(Math.random()*maximo)

}

function cambiarImagen() {
let srcImagen = imagenes[generarNumeroAleatorio(imagenes.length)]
imagen.setAttribute("src",srcImagen)

}

cifrarMensaje();
imagen.setAttribute("src","https://source.unsplash.com/random/150x150")
body.appendChild(imagen)
imagen.addEventListener("click",cambiarImagen)