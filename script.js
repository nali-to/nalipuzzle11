let unlockedDigits = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: ""
};

function cleanAnswer(answer) {
  return answer
    .toLowerCase()
    .replaceAll("'", "")
    .replaceAll("’", "")
    .replaceAll(" ", "")
    .trim();
}

function checkAnswer(number, correctAnswer, digit) {
  const input = document.getElementById(`answer${number}`);
  const result = document.getElementById(`result${number}`);

  const userAnswer = cleanAnswer(input.value);
  const correct = cleanAnswer(correctAnswer);

  if (userAnswer === correct) {
    unlockedDigits[number] = digit;

    result.className = "correct";
    result.innerHTML = `Correct 💖 Your clue is: <strong>${digit}</strong>`;
  } else {
    result.className = "wrong";
    result.innerHTML = "Not yet my love, try again 💕";
  }
}

function unlockFinal() {
  const finalCode = document.getElementById("finalCode").value.trim();
  const finalResult = document.getElementById("finalResult");

  if (finalCode === "0714") {
    finalResult.className = "final-message";
    finalResult.innerHTML = `
      <h2>I love you forever 💖</h2>
      <p>
        You solved every clue and found your way back to me.
      </p>
      <p>
        No matter where life takes us, you will always have me.
      </p>
      <h3>Forever yours, Nali 💕</h3>
    `;
  } else {
    finalResult.className = "wrong";
    finalResult.innerHTML = "The lock did not open yet. Check the clues again 🔐";
  }
}
