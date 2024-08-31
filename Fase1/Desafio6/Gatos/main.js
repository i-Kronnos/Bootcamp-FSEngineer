// ----------------- Javascript code for Esteban Quiñones -----------------

// Punto A
var cantidadDeGatos = 0 //Cambiar el numero para ver el resultado
var emojis = ["😺", "😸", "😹"]

for (let i = 1; i <= cantidadDeGatos; i++) {
    const emoji = emojis[(i - 1) % emojis.length];
    console.log(`Cat #${i} ${emoji}`);
}
