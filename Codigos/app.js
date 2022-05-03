let order = [];
// Vai guardar as ordens das cores que irão aparecer;
let clickedOrder= [];
// Vai guardr a ordem dos cliques do jogador
let score = 0
//Vai contar a pontuação da pessoa;
// Numeração das cores
//0 = verde 
//1=vermelho
//2=amarelo
//3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//Função de sorteio de numeros entre 0 e 3
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); //Passar a cor que foi iterada e o number que pega o numero +1 
    }
}
        
//Função que vai acender a cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Verificar a ordem dos cliques com o as cores que apareceram de forma aleatoria
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para guardar os cliques do jogador

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor;

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Função proximo nivel

let nextLevel = () => {
    score++;
    shuffleOrder();
    
}
//Caso o jogador tenha perdido o jogo

let gameOver = () =>{
    alert (`Pontuação ${score} \n Você perdeu o jogo! \n Clique em ok para reiniciar um novo jogo`);
    order=[];
    clickedOrder=[];

    playGame();
}
//Dar um alert e zerar a pontuação para 0
let playGame = ()=>{
    score = 0;
    alert("Bem-vindo ao Gênesis! Iniciando um novo jogo!");
    nextLevel();
}

//Ativar os cliques do jogo
//Evento de cliques
green.onclick=()=>click(0);
red.onclick=()=>click(1);
yellow.onclick=()=>click(2);
blue.onclick=()=>click(3);


playGame();