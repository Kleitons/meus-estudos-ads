// 1. Array com a lista de cores disponíveis (nomes, hex ou rgba) [2]
const colors = ["green", "red", "rgba(133,122,200)", "#F15025", "#70A1FF", "#2ED573", "#FFA500"];

// 2. Seleção dos elementos do DOM [2]
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

// 3. Adicionando o ouvinte de eventos de clique [2]
btn.addEventListener("click", function () {
  // Sorteia um índice aleatório baseado no tamanho do array [2]
  const randomNumber = getRandomNumber();

  // Altera a cor de fundo da página [2]
  document.body.style.backgroundColor = colors[randomNumber];

  // Atualiza o texto e a cor do código exibido na tela
  colorSpan.textContent = colors[randomNumber];
  colorSpan.style.color = colors[randomNumber];
});

// Função para gerar um número inteiro aleatório entre 0 e (colors.length - 1) [2]
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // Uso de Math.floor, Math.random e array.length [2]
}