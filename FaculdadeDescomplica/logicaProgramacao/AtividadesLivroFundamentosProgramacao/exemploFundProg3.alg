Algoritmo "exemploFundProg3"
// Faça um algoritmo para calcular a média aritmética entre duas notas de um aluno emostrar sua situação, que pode ser aprovado ou reprovado.
var
   N1, N2, M : real;
inicio
   Escreva ("Digite a primeira nota: ");
   Leia (N1);
   Escreva ("Digite a segunda nota: ");
   Leia (N2);
   M <- (N1 + N2)/2;
   Escreva("Média: ", M);
   Se M >= 7
    entao Escreva(" Aprovado");
    senao inicio Escreva(" Reprovado");
   fimse
fimAlgoritmo