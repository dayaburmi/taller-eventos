let buton = document.getElementById("botonSaludo")

buton.onclick = function(event) {
    alert("¡Hola!");
    event.stopPropagation(); // Detiene la propagacion del evento hacia el div
}