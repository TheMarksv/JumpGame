const character = document.getElementById("character");
const block = document.getElementById("block");
let counter = 0;
let isJumping = false;

document .addEventListener ("keydow", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (!isJumping) {
        isJumping = true;
        character.classList.add ("animate");
        setTimeout(() => {
            
         character.classList.remove("animate");
         isJumping = false;
        }, 500);
    } 
}

const checkDead = setInterval (() =>{
    const characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parent( window.getComputedStyle("block").getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft> 0 && characterTop >= 130) {
        block.style.animation ="none";
        alert ("Fim de Jogo. Pontuação: " + Math.floor (counter / 100));
        counter = 0;
        block.style.animation = "block linear infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerText = Math.floor (counter / 100);
    }
} ,10);

