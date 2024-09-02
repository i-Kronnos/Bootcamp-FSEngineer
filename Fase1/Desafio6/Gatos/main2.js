// ----------------- Javascript code for Esteban Quiñones -----------------

// Punto C

var cantidadDeGatos = 0; //Cambiar el numero para ver el resultado
var cantidadDePasos = 0; //Cambiar el numero para ver el resultado

for (let i = 1; i <= cantidadDeGatos; i++) {
    let gato = (i % 2 === 0) ? "🐈🐈‍⬛" : "🐈";
    let pasos = "🐾".repeat(cantidadDePasos);
    console.log(`Gato #${i}: ${gato}${pasos}`);
}