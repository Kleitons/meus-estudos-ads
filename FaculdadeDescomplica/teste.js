// 1. Variáveis
let ativo = "Mini Dólar (WDO)";
let pontosGanhos = 15;
let valorPorPonto = 10; // Cada ponto do mini dólar vale R$ 10
let quantidadeContratos= 3;

// 2. A Lógica
// Calcular o lucro: (pontos * valor do ponto) * contratos
let lucroTotal = (pontosGanhos * valorPorPonto) * quantidadeContratos;

//3. a saída (Mostrando o resultado na tela)
console.log ("--- RELATÓRIO DO TRADE ---");
console.log ("Ativo: " + ativo);
console.log ("Lucro da Operação: R$ " + lucroTotal);