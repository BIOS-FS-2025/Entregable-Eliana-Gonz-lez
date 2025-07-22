function cambiarTexto() {
console.log("cambiar texto");
    document.getElementById("texto-magico").innerHTML = "¡Hola, mundo con JavaScript!";
}

document.getElementById("mi-boton").addEventListener("click", cambiarTexto);

console.log("texto cambiado");