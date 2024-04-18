const player = document.getElementById("square");
const barrier = document.getElementById("barrier");
const colors = ['red', 'green', 'blue', 'yellow']
let colorIndex = 0;

function jump() {
  if (player.classList != "jump") {
    player.classList.add("jump");

    setTimeout(function () {
      player.classList.remove("jump");
    }, 300);
  }
}

barrier.addEventListener('animationiteration', function() {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    barrier.style.backgroundColor = colors[randomColorIndex];
});

let isAlive = setInterval(function () {
  // get current barrier X position
  let barrierLeft = parseInt(
    window.getComputedStyle(barrier).getPropertyValue("left")
  );

  // detect collision if color not the same
  if (barrierLeft < 50 && barrierLeft > 0 && barrier.style.backgroundColor != player.style.backgroundColor) {
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
    if (event.code === 'Space') {
        colorIndex = (colorIndex + 1) % colors.length;
        square.style.backgroundColor = colors[colorIndex];
    }
});