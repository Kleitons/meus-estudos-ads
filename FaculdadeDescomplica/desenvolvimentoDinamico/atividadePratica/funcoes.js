// Criando funções simples
// Função chamada  saudação que imprime "Olá, mundo!" no console

function saudacao(){
    console.log("Olá, mundo!");
}

// Chamando a função
saudacao();

// Passando parâmetros para funções
// Função de saudação para aceitar um parâmetro nome
// Função imprime mensagem de saudação personalizada que inclui o nome passado como argumento

function novaSaudacao(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
}

// Chamando a função novaSaudacao() com diferentes argumentos
novaSaudacao("Carol");
novaSaudacao("Pedro");
novaSaudacao("Maria");

// Criando função soma que aceita dois parâmetros a e b, e retorna a soma deles
function soma(a, b) {
    return a + b;
}

// Chamando a função soma() e exibindo o resultado no console
console.log("Soma de 5 e 3:", soma(5, 3));
console.log("Soma de 10 e 15:", soma(10, 15));
console.log("Soma de -4 e 8:", soma(-4, 8));