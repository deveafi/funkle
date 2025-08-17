const words = ["apple", "grape", "pearl", "crate", "stone"]; // word list
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

// --- Keyboard setup ---
const keyboardLayout = [
  "q w e r t y u i o p",
  "a s d f g h j k l",
  "Enter z x c v b n m Backspace"
];
const keyboard = document.getElementById("keyboard");

keyboardLayout.forEach(row => {
  const rowDiv = document.createElement("div");
  rowDiv.className = "key-row";
  row.split(" ").forEach(key => {
    const btn = document.createElement("button");
    btn.textContent = key === "Backspace" ? "⌫" : key;
    btn.className = "key";
    btn.onclick = () => handleKey(key);
    rowDiv.appendChild(btn);
  });
  keyboard.appendChild(rowDiv);
});

function handleKey(key) {
  if (key === "Enter") {
    if (currentGuess.length === 5) checkGuess();
  } else if (key === "Backspace") {
    currentGuess = currentGuess.slice(0, -1);
    updateRow();
  } else if (/^[a-zA-Z]$/.test(key)) {
    if (currentGuess.length < 5) {
      currentGuess += key.toLowerCase();
      updateRow();
    }
  }
}

// --- Keyboard + typing from computer ---
document.addEventListener("keydown", (e) => handleKey(e.key));

function updateRow() {
  const row = board.children[currentRow].children;
  for (let i = 0; i < 5; i++) {
    row[i].textContent = currentGuess[i] ? currentGuess[i] : "";
  }
}

function checkGuess() {
  const row = board.children[currentRow].children;
  const answerArr = answer.split("");
  
  for (let i = 0; i < 5; i++) {
    const letter = currentGuess[i];
    const tile = row[i];
    const keyBtn = [...document.getElementsByClassName("key")]
      .find(b => b.textContent.toLowerCase() === letter);

    if (letter === answer[i]) {
      tile.classList.add("correct");
      keyBtn?.classList.add("correct");
    } else if (answerArr.includes(letter)) {
      tile.classList.add("present");
      if (!keyBtn?.classList.contains("correct")) {
        keyBtn?.classList.add("present");
      }
    } else {
      tile.classList.add("absent");
      if (!keyBtn?.classList.contains("correct") && !keyBtn?.classList.contains("present")) {
        keyBtn?.classList.add("absent");
      }
    }
  }

  if (currentGuess === answer) {
    setTimeout(() => alert("You win! 🎉"), 100);
  } else {
    currentRow++;
    currentGuess = "";
    if (currentRow === 6) setTimeout(() => alert("Game over! Word was " + answer), 100);
  }
}
