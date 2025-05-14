let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const result = document.getElementById("resultMessage");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Masukkan angka antara 1–100!";
    result.className = "alert alert-warning";
    result.classList.remove("d-none");
    return;
  }

  if (guess === randomNumber) {
    result.textContent = `🎉 Selamat! Angka yang benar adalah ${randomNumber}`;
    result.className = "alert alert-success";
  } else if (guess < randomNumber) {
    result.textContent = "Terlalu rendah!";
    result.className = "alert alert-info";
  } else {
    result.textContent = "Terlalu tinggi!";
    result.className = "alert alert-info";
  }

  result.classList.remove("d-none");
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("resultMessage").classList.add("d-none");
}
