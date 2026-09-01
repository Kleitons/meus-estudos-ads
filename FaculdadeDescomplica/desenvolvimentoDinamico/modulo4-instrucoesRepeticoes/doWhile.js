// Imagine que você está tentando aprender a andar de bicicleta.
// Você decide praticar até conseguir andar por pelo menos 1 minuto sem cair.

// Aqui, usaremos um loop do...while para simular esse processo:

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("andei de bicicletar por ", tempoDeAndar, "minutos...");

    if (tempoDeAndar === 10) {
        caiu = true;
    }

} while (!caiu && tempoDeAndar < 10);