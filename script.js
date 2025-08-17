const words = ["apple", "grape", "pearl", "crate", "stone"]; // add more
const answer = words[Math.floor(Math.random() * words.length)];

const board = document.getElementById("board");
for (let r = 0; r < 6; r++) {
  const row = document.createElement("div");
  row.className = "row";
  for (let c = 0; c < 5; c++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    row.appendChild(tile);
  }
  board.appendChild(row);
}

let currentRow = 0;
let currentGuess = "";

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (currentGuess.length === 5) {
      checkGuess();
    }
  } else if (e.key === "Backspace") {
    currentGuess = currentGuess.slice(0, -1);
    updateRow();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    if (currentGuess.length < 5) {
      currentGuess += e.key.toLowerCase();
      updateRow();
    }
  }
});

function updateRow() {
  const row = board.children[currentRow].children;
  for (let i = 0; i < 5; i++) {
    row[i].textContent = currentGuess[i] ? currentGuess[i] : "";
  }
}

function checkGuess() {
  const row = board.children[currentRow].children;
  for (let i = 0; i < 5; i++) {
    const letter = currentGuess[i];
    if (letter === answer[i]) {
      row[i].classList.add("correct");
    } else if (answer.includes(letter)) {
      row[i].classList.add("present");
    } else {
      row[i].classList.add("absent");
    }
  }
  if (currentGuess === answer) {
    alert("You win!");
  } else {
    currentRow++;
    currentGuess = "";
    if (currentRow === 6) alert("Game over! Word was " + answer);
  }
}
