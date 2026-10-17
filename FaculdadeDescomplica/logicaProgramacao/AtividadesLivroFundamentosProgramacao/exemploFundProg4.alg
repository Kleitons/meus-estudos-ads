Algoritmo "exemploFundProg4"
// Faça um algoritmo para calcular o novo salário de um funcionário.
// Sabe-se que os funcionários que recevem atualmente salário de até R$ 500,00 terão aumento de 20;
// os demais terão aumento de 10%.
var
   salario, novoSalario : real;
inicio
   Escreva ("Digite o salário do funcionário: ");
   Leia (salario);
   Se salario <= 500
    entao novoSalario <- salario + (salario * 0.2);
    senao novoSalario <- salario + (salario * 0.1);
   fimse
   Escreva("Novo salário: ", novoSalario);
fimAlgoritmo