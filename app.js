
let numeroMaquina = Math.floor(Math.random() * 10) + 1;

// Pedir al usuario que adivine el número
let numeroUser = parseInt(prompt("Adivina el número entre 1 y 10"));
let vidas = 5;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt(`Número incorrecto, intenta nuevamente. Te quedan ${vidas} vidas.`));
}

// Verificar si el usuario adivinó o perdió
if (numeroMaquina === numeroUser) {
    console.log("¡Ganaste!");
    alert("¡Ganaste!");
} else {
    console.log(`Perdiste. El número correcto era ${numeroMaquina}`);
    alert(`Perdiste. El número correcto era ${numeroMaquina}`);
}
