"use strict";
let highScore = 0;
let score = 20;
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
});
const scoreUpdate = () => {
  document.querySelector(".score").textContent =
    Number(document.querySelector(".score").textContent) - 1;
};
const randomNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const guessingNumber = Number(document.querySelector(".guess").value);
  console.log(randomNumber);
  if (!guessingNumber) {
    document.querySelector(".message").textContent = "Invalid Input";
  } else {
    if (randomNumber > guessingNumber) {
      document.querySelector(".message").textContent = "Too Low";
      scoreUpdate();
    } else if (randomNumber < guessingNumber) {
      document.querySelector(".message").textContent = "Too high";
      scoreUpdate();
    } else {
      document.body.style.backgroundColor = "#008000";
      document.querySelector(".message").textContent = "Congratutations!";
      const selectHighScore = document.querySelector(".highscore");
      const selectScore = document.querySelector(".score");
      document.querySelector(".number").textContent = randomNumber;
      console.log(Number(selectScore.textContent));
      if (Number(selectScore.textContent) > highScore) {
        highScore = Number(selectScore.textContent);
        selectHighScore.textContent = highScore;
      }
    }
  }
});
