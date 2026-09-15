// 1. Array com os 16 caracteres do sistema Hexadecimal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 2. Seleção dos elementos no DOM
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

// 3. Evento de clique para gerar a cor hexadecimal
btn.addEventListener("click", function () {
  let hexColor = "#";

  // Laço que executa 6 vezes para criar a sequência do código hex
  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomNumber();
    hexColor += hex[randomIndex];
  }

  // Aplicação da cor sorteada no elemento do DOM
  document.body.style.backgroundColor = hexColor;
  colorSpan.textContent = hexColor;
  colorSpan.style.color = hexColor;
});

// Função auxiliar para obter um índice aleatório entre 0 e 15
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}