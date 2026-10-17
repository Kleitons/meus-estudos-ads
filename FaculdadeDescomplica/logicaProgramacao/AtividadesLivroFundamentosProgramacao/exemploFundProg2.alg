algoritmo "exemploFundProg2"
// Faça um algoritmo para mostrar o resultado da divição de dois números.
var
   N1, N2, D : real;
inicio
   Escreva("Digite o primeiro número: ");
   Leia(N1);
   Escreva("Digite o segundo número: ");
   Leia(N2);
   se N2 = 0 entao
        Escreva("Erro: Divisão por zero não é permitida.");
    senao inicio
        D <- N1 / N2;
        Escreva("O resultado da divisão é: ", D);
    fimse
   
fimAlgoritmo