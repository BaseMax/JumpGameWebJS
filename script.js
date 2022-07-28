let character = document.getElementById("character");
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue('width'));

let ground = document.getElementById("ground");
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundRight = parseInt(window.getComputedStyle(ground).getPropertyValue('right'));
let groundWidth = parseInt(window.getComputedStyle(ground).getPropertyValue('width'));

let isJumping = false;
let upTime;
let downTime;

function jump() {
    if (isJumping) return;
    upTime = setInterval(() => {
        if (characterBottom >= groundHeight + 250) {
            clearInterval(upTime);
            downTime = setInterval(() => {
                if (characterBottom <= groundHeight) {
                    clearInterval(downTime);
                    isJumping = false;
                }
                characterBottom -= 10;
                character.style.bottom = characterBottom + "px";
            }, 10);
        }

        characterBottom -= 10;
        character.style.bottom = characterBottom + "px";
        isJumping = true;
    }, 20);
}

function control(e) {
    if (e.key === "ArrowUp" || e.key === ' ') {
        jump();
    }

}

function generateObstacles() {
    let obstacles = document.querySelector(".obstacles");
    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    obstacle.style.left = groundRight + groundWidth + "px";
    obstacles.appendChild(obstacle);

    let obstacleRight = -30;
    let obstacleBottom = 100;
    let obstacleWidth = 30;
    let obstacleHeight = Math.floor(Math.random() * 50) + 50;
    obstacle.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

    function moveObject() {
        obstacleRight += 5;
        obstacle.style.right = obstacleRight + "px";
        obstacle.style.bottom = obstacleBottom + "px";
        obstacle.style.width = obstacleWidth + "px";
        obstacle.style.height = obstacleHeight + "px";
    }

    let obstacleInterval = setInterval(moveObject, 10*2);
    let obstacleTimeout = setTimeout(() => {
        clearInterval(obstacleInterval);
        obstacles.removeChild(obstacle);
    }, groundRight + groundWidth + obstacleRight);

}