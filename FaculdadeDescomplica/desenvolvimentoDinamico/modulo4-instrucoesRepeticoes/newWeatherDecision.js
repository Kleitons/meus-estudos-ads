// Variável que representa a previsão do tempo
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)

let weatherForecast = "sunny"; 

// Analogia com a vida real: Decidindo se devemos levar um guarda-chuva
// Vamos adicionar uma condição extra para cobrir outro cenário

if (weatherForecast === "rainy") { // se
    console.log("devemos levar um guarda-chuva");
} else if (weatherForecast === "cloudy") { // senão se
    console.log("devemos levar um guarda-chuva, só por segurança");
} else { // senão
    console.log("NÃO devemos levar um guarda-chuva");
}
