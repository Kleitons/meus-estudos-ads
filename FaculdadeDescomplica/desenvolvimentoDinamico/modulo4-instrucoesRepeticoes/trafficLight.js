// Função que recebe a cor do semáforo e decide a ação do pedestre
function checkTrafficLight(lightColor) {

    switch (lightColor) {
        case 'verde':
            console.log("Pode atravessar a rua.");
            break;
        case 'amarelo':
            console.log("Prepare-se para parar.");
            break;
        case 'vermelho':
            console.log("Pare! Não atravesse a rua.");
            break;
        default:
            console.log("Cor inválida! Aguarde até que o semáforo esteja em uma cor válida.");
    }

}

// Exemplos de uso
checkTrafficLight('verde');
//checkTrafficLight('amarelo');
//checkTrafficLight('vermelho');
//checkTrafficLight('azul');