"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " 🥳 Good guess";
console.log(document.querySelector(".message").textContent);

console.log(document.querySelector(".number").textContent);
document.querySelector(".number").textContent = 13;

console.log(document.querySelector(".Score").textContent);
document.querySelector(".Score").textContent = 10;

document.querySelector(".guess").value = 23;
*/
/*
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
*/
/*
const secretnumber = Math.trunc(Math.random() * 20 + 1);
*/

const secretnumber = 12;
let highscore = 0;
let score = 20;
function checkguess() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🫤 No number!";
    document.querySelector(".message").style.color = "#1E90FF";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".guessedNumber").textContent =
      "🧜🏻‍♂️🧜🏻‍♀️AWESOME GUESS!!";
    document.querySelector("body").style.backgroundColor = "#1E90FF";
    document.body.classList.add("blinking");
    const myAudio = document.querySelector("#audio");
    myAudio.play();
    document.querySelector(".number").textContent = secretnumber;
    highscore += 1;
    document.querySelector(".highscore").textContent = highscore;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      document.querySelector(".message").style.color = "#f50000";
      score--;
      document.querySelector(".Score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".Score").textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      document.querySelector(".message").style.color = "#d4d006";
      score--;
      document.querySelector(".Score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".Score").textContent = 0;
    }
  }
}
