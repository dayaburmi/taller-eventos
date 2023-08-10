let buton = document.getElementById("botonSaludo")

buton.onclick = function(event) {
    alert("¡Hola!");
    event.stopPropagation(); // Detiene la propagación del evento al div
}