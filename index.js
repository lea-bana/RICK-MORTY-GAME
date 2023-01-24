const clouds = document.querySelectorAll(".hole"); // all green clouds
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; //true if game end
let score = 0;

//head up random time
function randomTime(min, max) {
  return Math.round(Math.random() + (max - min) + min);
}

//head up on random cloud
function randomCloud(clouds) {
  const indexCloud = Math.floor(Math.random() * clouds.length);
  const cloudSelect = clouds[indexCloud];

  if (cloudSelect === lastCloud) {
    return randomCloud(clouds);
  }
  lastCloud = cloudSelect;

  return cloudSelect;
}

function showHead() {
  const time = randomTime(600, 1000);
  const cloud = randomCloud(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showHead();
    cloud.classList.remove("up");
  }, time);
}

function playerScore(event) {
  if (!event.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

//
heads.forEach((head) => head.addEventListener("click", playerScore));

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  showHead();
  setTimeout(() => {
    timeUp = true;
    setTimeout(() => {
      scoreBoard.textContent = "end";
    }, 2000);
  }, 10000);
}
