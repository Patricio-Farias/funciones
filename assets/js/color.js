
//obtiene el elemento HTML con el ID "div-azul" y lo asigna a la variable ele1 y asi con los sgtes

const ele1 = document.getElementById("div-azul")
const ele2 = document.getElementById("div-rojo")
const ele3 = document.getElementById("div-verde")
const ele4 = document.getElementById("div-amarillo")

//cuando se hace click en ele1 cambia a color negro

ele1.addEventListener("click", function(){
    ele1.style.backgroundColor = "black";
})

//cuando se hace click en ele2 cambia a color negro

ele2.addEventListener("click", function(){
    ele2.style.backgroundColor = "black";
})

//cuando se hace click en ele3 cambia a color negro
ele3.addEventListener("click", function(){
    ele3.style.backgroundColor = "black";
})

//cuando se hace click en ele4 cambia a color negro

ele4.addEventListener("click", function(){
    ele4.style.backgroundColor = "black";
})
