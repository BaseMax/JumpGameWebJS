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
    let obstacleBottom = parseInt(window.getComputedStyle(obstacle).getPropertyValue('bottom'));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    let obstacleWidth = parseInt(window.getComputedStyle(obstacle).getPropertyValue('width'));
    let obstacleHeight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('height'));
    let obstacleSpeed = Math.floor(Math.random() * 5) + 1;
    let obstacleInterval = setInterval(() => {
        obstacleRight -= obstacleSpeed;
        obstacle.style.right = obstacleRight + "px";
        if (obstacleRight <= -obstacleWidth) {
            obstacles.removeChild(obstacle);
            clearInterval(obstacleInterval);
        }
    }, obstacleSpeed);

    let isColliding = false;
    let collisionInterval = setInterval(() => {
        if (characterRight + characterWidth >= obstacleRight && characterRight <= obstacleRight + obstacleWidth && characterBottom + characterHeight >= obstacleBottom && characterBottom <= obstacleBottom + obstacleHeight) {
            isColliding = true;
            clearInterval(collisionInterval);
        }
    }, 10);

    if (isColliding) {
        alert("Game Over");
        location.reload();
    }
    
}