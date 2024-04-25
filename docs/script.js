const player = document.getElementById("square");
const barrier = document.getElementById("barrier");
const scoreDisplay = document.getElementById("score"); 
const colors = ['pink', 'green', 'skyblue', 'yellow']
let colorIndex = 0;
let score = 0;
let updateScore, isAlive;

barrier.addEventListener('animationiteration', function() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    barrier.style.backgroundColor = colors[randomColorIndex];
});

function restartGame() {
    clearInterval(updateScore);
    clearInterval(isAlive);
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
}

function startGame() {
    updateScore = setInterval(function () {
        score++;
        scoreDisplay.textContent = score;
    }, 200);

    isAlive = setInterval(function () {
        let barrierLeft = parseInt(window.getComputedStyle(barrier).getPropertyValue("left"));
        if (barrierLeft < 76 && barrierLeft > 0 && barrier.style.backgroundColor !== player.style.backgroundColor) {
            alert("Game Over!");
            restartGame();
        }
    }, 10);
}
  
document.addEventListener("keydown", function (event) {
    if (event.code === 'Space') {
        colorIndex = (colorIndex + 1) % colors.length;
        square.style.backgroundColor = colors[colorIndex];
    }
}); 

document.addEventListener("touchstart", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    square.style.backgroundColor = colors[colorIndex];
});


startGame();