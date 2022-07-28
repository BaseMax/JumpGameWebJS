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
