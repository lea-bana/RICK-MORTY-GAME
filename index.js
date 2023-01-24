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

function showHead1() {
  const time = randomTime(600, 1000);
  const cloud = randomCloud(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showHead1();
    cloud.classList.remove("up");
  }, time);
}

function showHead2() {
  const time = randomTime(500, 800);
  const cloud = randomCloud(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showHead2();
    cloud.classList.remove("up");
  }, time);
}
function showHead3() {
  const time = randomTime(250, 500);
  const cloud = randomCloud(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showHead3();
    cloud.classList.remove("up");
  }, time);
}

//
function playerScore(event) {
  if (!event.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

//
heads.forEach((head) => head.addEventListener("click", playerScore));

//
function startGame1() {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  showHead1();
  setTimeout(() => {
    timeUp = true;
    setTimeout(() => {
      scoreBoard.textContent = "end";
    }, 2000);
  }, 10000);
}

function startGame2() {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  showHead2();
  setTimeout(() => {
    timeUp = true;
    setTimeout(() => {
      scoreBoard.textContent = "end";
    }, 2000);
  }, 10000);
}

function startGame3() {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  showHead3();
  setTimeout(() => {
    timeUp = true;
    setTimeout(() => {
      scoreBoard.textContent = "end";
    }, 2000);
  }, 10000);
}

/*LEVELS*/

const speed = 50;

let levelText1 = "NOViCE";
let i = 0;
let levelText2 = "APPRENTi";
let j = 0;
let levelText3 = "ExPERT";
let k = 0;

function typeWriter1() {
  if (i < levelText1.length) {
    document.getElementById("demo1").textContent += levelText1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
function typeWriter2() {
  if (j < levelText2.length) {
    document.getElementById("demo2").textContent += levelText2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}
function typeWriter3() {
  if (k < levelText3.length) {
    document.getElementById("demo3").textContent += levelText3.charAt(k);
    k++;
    setTimeout(typeWriter3, speed);
  }
}
function hideLevels() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("demo" + i).addEventListener("click", () => {
      document.getElementById("demo1").style.display = "none";
      document.getElementById("demo2").style.display = "none";
      document.getElementById("demo3").style.display = "none";
    });
  }
}

document.getElementById("morty-play").addEventListener("click", () => {
  typeWriter1();
  typeWriter2();
  typeWriter3();
  hideLevels();
});
