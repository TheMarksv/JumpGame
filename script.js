const character = document.getElementById("character");
const block = document.getElementById("block");
let counter = 0;
let isJumping = false;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (!isJumping) {
            isJumping = true;
            jump();
        }
    }
});

function jump() {
    character.classList.add("animate");
    setTimeout(() => {
        character.classList.remove("animate");
        isJumping = false;
    }, 500);
}

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Fim de Jogo. Pontuação: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block linear infinite";
    } else {
        // Aqui ta contando o tempo todo tem que contar so quando o personagem pula o bloco
        counter++;
        document.getElementById("ScoreSpan").innerText = Math.floor(counter / 100);
    }
}, 10);

let isPaused = false;

function togglePause () {
    if(isPaused) {
        resumeGame();
    }
    else {
        pauseGame();
    }
}

function pauseGame() {
    isPaused = true;


document.getElementById('PauseMenu').classList.remove('hidden');
// pausar a logica do jogo, por exemplo, parar o loop do jogo

clearInterval ('gameloop');
}

function resumeGame(){
    isPaused = false;
    document.getElementById('pauseMenu').classList.add('hidden');
    // Retomar a lógica do jogo, por exemplo, reiniciar o loop do jogo
    gameLoop = setInterval( runGame, 1000/ 60); // Exemplo de loop de jogo
}

function RestarGame() {
     // Lógica para reiniciar o jogo
}

function Quitgame() {
       // Lógica para sair do jogo
}

// Exemplo de como chamar a função de pausa com uma tecla
document.addEventListener('keydown', function(event) {
    if ( event.key === 'Escape') {
        togglePause();
    }
});


// função para adicionar a movimentação horizontal ao player. Essa função usa as teclas de seta esquerda e seta direita para mover o jogador horizontalmente
let playerX = 100; // posiçao inicial do jogador no eixo x
const playerSpeed = 5; // velocidade de movimento do jogador

// Função para atualizar a posição horizontal do jogador
function movePlayer (event) {
    if (event.key === 'SetaDireita') {
        playerX += playerSpeed; // se mover para a direita
    
    } else if ( event.key === 'SetaEsquerda') {
        playerX -= playerSpeed;
    } 


    // atualiza a posiçao do player na tela
    const playerElement = document.getElementById ('player');
    playerElement.style.left = playerX + 'Px';
}

// Event listener para detectar as teclas de seta
document.addEventListener('keydown', movePlayer);

// variaveis para configuraçao de obstaculos
const NumeroObstaculos = 5; // Quantidade de obstaculos
const AlturaMinimaObstaculos = 20 // altura minima dos obstaculos
const AlturaMaximaObstaculos = 100 // altura maxima obstacuslos
const Cores = ['red', 'blue', 'green', 'yellow', 'purple']; // Cores dos obstaculos

// Função para criar obstáculos no cenário
function CriarObstaculos () {
    const gameArea = document.getElementById('gameArea'); // Container do jogo

    for (let i = 0; i < NumeroObstaculos; i++) {
        // criar novo elemento de obstaculo
        const Obstaculo = document.createElement('div');
        Obstaculo.classList.add('Obstaculo');

        // Configurar a altura e a cor de cada obstáculo aleatoriamente
        const Altura = Math.floor(Math.random() * (AlturaMaximaObstaculos - AlturaMinimaObstaculos + 1)) + AlturaMinimaObstaculos;
        const Cor = Cores [Math.floor(Math.random() * Cores.length)];

        // Definir estilo do obstaculo
        Obstaculo.style.Altura = Altura + 'px';
        Obstaculo.style.width = '20px'; // Largura fixa dos obstaculos
        Obstaculo.style.position = 'absolute';
        Obstaculo.style.buttom = '0px'; // Posicionar no chão
        Obstaculo.style.left = Math.floor(Math.random() * (gameArea.offsetWidth -20)) + 'px'; // Posiçao x aleatoria
        Obstaculo.style.backgroundcolor = Cor;

        // adcionar obstaculo ao cenario
        gameArea.appendChild(Obstaculo);
    }
}

// Chamar a função para criar os obstáculos ao carregar o jogo
window.onload = crateObstaculos;
