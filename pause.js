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