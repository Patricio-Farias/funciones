

/*funcion normal
function pintar(){
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

//functión modificada

//declara constante
const ele = document.getElementById("ele1");

//funcion pintar toma dos parametros, se establece color de fondo
function pintar(element, color){
    element.style.backgroundColor = color;
}

//cambia a color de fondo verde
pintar(ele, "green");

//escucha click y posterior establece color de fondo ele amarillo
ele.addEventListener("click", function(){
    ele.style.backgroundColor = "yellow";
})