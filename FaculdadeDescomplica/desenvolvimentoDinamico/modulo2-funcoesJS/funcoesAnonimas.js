// Declaração de uma variável chamada resultado e atribuição de uma função anônima a ela

let somarParametros = function(parametro1, parametro2){
    console.log("Parãmetro 1: " + parametro1);
    console.log("Parãmetro 2: " + parametro2);
    
    let resultado = parametro1 + parametro2;

    console.log("O resultado da soma é: " + resultado);

    return resultado;
}

// Chamada da função anônima através da variável
let resultado = somarParametros(5, 10);
console.log("Resultado da Chamada da função somarParametros: " + resultado);

// Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutando a função passada como argumento: ");
    return funcao(valor1, valor2);
}

// Passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log("Resuldado da execução da função passada como argumento: " + resultadoExecucao);

// Definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a, b){
    console.log("\nFunção de chamada imediata: ");
    return a * b;  
})(4, 5);

console.log("Resultado da função de chamada imediata: " + resultadoImediato);