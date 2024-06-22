let Attempts = 0;
let Score = 0;

function guess(userGuess) {
  Attempts++;
  document.getElementById("Attempts").innerHTML = Attempts;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 == 0 ? "even" : "odd";

  function playsound(iscorrect) {
    const sound = iscorrect
      ? document.getElementById("correctSFX")
      : document.getElementById("wrongSFX");
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  if (userGuess == correctAnswer) {
    Score++;
    document.getElementById("userscore").innerHTML = Score;
    document.getElementById(
      "heading"
    ).innerText = `Correct! The number was ${randomNumber} `;
    playsound(true);
  } else {
    document.getElementById(
      "heading"
    ).innerText = `Wrong! The number was ${randomNumber} `;
    playsound(false);
  }
}
