let buton = document.getElementById("botonSaludo")

buton.addEventListener("click", function(event) {
    alert("¡Hola!");
    event.stopPropagation(); // Detiene la propagación del evento al div
})