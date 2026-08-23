//Exemplos de Operadores Lógicos em JavaScript

// Operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b; // false, pois ambos precisam ser verdadeiros
const resultadoE2 = a && true; // true, pois ambos são verdadeiros

console.log(`true && false: ${resultadoE1}`); // Saída: true && false: false
console.log(`true && true: ${resultadoE2}`); // Saída: true && true: true

// Operador OU lógico (||)
const resultadoOU1 = a || b; // true, pois pelo menos um é verdadeiro
const resultadoOU2 = false || false; // false, pois ambos são falsos

console.log(`true || false: ${resultadoOU1}`); // Saída: true || false: true
console.log(`false || false: ${resultadoOU2}`); // Saída: false || false: false

// Operador NÃO lógico (!)
const resultadoNAO1 = !a; // false, pois a é verdadeiro
const resultadoNAO2 = !b; // true, pois b é falso

console.log(`!true: ${resultadoNAO1}`); // Saída: !true: false
console.log(`!false: ${resultadoNAO2}`); // Saída: !false: true

// Combinação de operadores lógicos
const resultadoComb1 = (a || b) && !b; // true, pois a é verdadeiro e b é falso
const resultadoComb2 = !(a && b) || a; // true, pois a é verdadeiro

console.log(`(true || false) && !false: ${resultadoComb1}`); // Saída: (true || false) && !false: true
console.log(`!(true && false) || true: ${resultadoComb2}`); // Saída: !(true && false) || true: true