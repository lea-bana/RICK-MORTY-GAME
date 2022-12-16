const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");

let timeUp = false; //true si jeu fini
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() + (max - min) + min);
}
function randomCloud(clouds) {
  const indexCloud = Math.floor(Math.random() * clouds.length);
}

function showHead() {
  const time = randomTime(600, 1000);
  const cloud = randomCloud(clouds);
}
