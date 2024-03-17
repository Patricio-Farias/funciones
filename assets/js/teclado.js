// Variable global para almacenar el color actual
let currentColor = "";

// Función para cambiar el color del div "key"
function changeColor(color) {
    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = color;
}

// Evento de teclado para cambiar el color al presionar las teclas
document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        currentColor = "pink";  //si la tecla es a aplica color rosado
    } else if (event.key === "s") {
        currentColor = "orange"; //si la tecla es a aplica color naranjo
    } else if (event.key === "d") {
        currentColor = "lightblue"; //si la tecla es a aplica color celeste
    } else if (event.key === "q") {
        currentColor = "purple";  //si la tecla es a aplica color Morado
    } else if (event.key === "w") {
        currentColor = "gray";  //si la tecla es a aplica color Gris
    } else if (event.key === "e") {
        currentColor = "brown";  //si la tecla es a aplica color Cafe
    } else {
        return; // Si no es ninguna de las teclas especificadas, salimos de la función
    }
    changeColor(currentColor);
});