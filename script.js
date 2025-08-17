// --- Word lists ---
const answers = [
"funky"];
const validGuesses = [
  ...answers,
   "aback", "abase", "abate", "abbey", "abbot", "abhor", "abide", "abled", "abode", "abort",
  "about", "above", "abuse", "abyss", "acorn", "acrid", "actor", "acute", "adage", "adapt",
  "adept", "admin", "admit", "adobe", "adopt", "adore", "adorn", "adult", "affix", "afire",
  "afoot", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony",
  "agree", "ahead", "aider", "aisle", "alarm", "album", "alert", "algae", "alibi", "alien",
  "align", "alike", "alive", "allow", "alone", "along", "aloof", "aloud", "alter", "amass",
  "amaze", "amber", "amble", "among", "ample", "amuse", "angel", "anger", "angle", "angry",
  "angst", "animal", "ankle", "apple", "apply", "argue", "arise", "armor", "aroma", "arose",
  "array", "arrow", "artic", "asset", "audio", "audit", "augur", "aunts", "avail", "avert",
  "avoid", "await", "awake", "award", "aware", "awash", "awful", "awoke", "azure", "bacon",
  "badge", "badly", "baggy", "bails", "bakes", "balmy", "banjo", "barbs", "barny", "baron",
  "bashy", "basic", "basin", "basis", "batch", "bathe", "beach", "beady", "beaks", "beaus",
  "becks", "beers", "beets", "before", "begat", "begin", "begun", "being", "belief", "below",
  "bench", "berry", "beset", "betas", "betes", "biddy", "bigot", "bilge", "billy", "bingo",
  "bison", "black", "blade", "blame", "blank", "blast", "blaze", "bleak", "blear", "bless",
  "blind", "blink", "block", "blood", "bloom", "blowy", "blues", "blunt", "board", "boast",
  "boats", "bobby", "bodes", "boggy", "bongo", "bonus", "booby", "boost", "booth", "boots",
  "border", "bossy", "botch", "bound", "bourn", "bout", "bowel", "boxer", "brace", "brack",
  "brand", "brash", "brass", "brave", "brawn", "bread", "break", "breed", "bribe", "brick",
  "bride", "brief", "bring", "briny", "brisk", "broil", "brose", "brook", "broom", "brose",
  "brown", "brush", "brute", "buddy", "budge", "buggy", "build", "built", "bulge", "bunch",
  "bumpy", "bunch", "bumpy", "buoyed", "burly", "bushy", "butch", "butte", "buyer", "cabal",
  "cabby", "cable", "cache", "caddy", "cadet", "cafe", "cage", "cake", "calve", "camel",
  "camp", "cane", "cant", "cape", "carol", "carry", "carve", "caste", "catch", "cater",
  "cause", "cavil", "cedar", "cello", "chafe", "chaff", "chain", "chair", "chalk", "champ",
  "chant", "chaos", "chaps", "chary", "chase", "cheap", "cheat", "check", "cheer", "chef",
  "cherry", "chest", "chew", "chic", "chide", "chief", "chill", "chime", "chimp", "chip",
  "chop", "chock", "chose", "chow", "chub", "chunk", "churn", "churl", "chuse", "chyle",
  "cider", "cigar", "civil", "clack", "claps", "claps", "class", "claw", "clean", "clear",
  "cleft", "clerk", "click", "clime", "clink", "clots", "clout", "clown", "cluck", "clump",
  "clung", "coach", "coast", "coat", "cobia", "coble", "cocky", "cocoa", "codex", "cohen",
  "coles", "colic", "colon", "color", "comb", "come", "comic", "comed", "comet", "comic",
  "conic", "cook", "cool", "cope", "coral", "cord", "core", "cork", "corn", "cost", "cozy",
  "count", "court", "cover", "covet", "covey", "cower", "cozy", "crack", "craft", "cram",
  "crank", "crash", "crawl", "craze", "cream", "creep", "crest", "crib", "crimp", "crisp",
  "croak", "crock", "croon", "crop", "cross", "crowd", "crown", "crust", "cryer", "cubed",
  "cuber", "cubic", "cuff", "cull", "cult", "curb", "curd", "curl", "curse", "curt", "curve",
  "cusp", "cute", "cyber", "cycle", "cynic", "daily", "dairy", "dash", "date", "daunt",
  "dawn", "dazed", "deary", "death", "debby", "deeps", "deer", "defy", "delay", "delta",
  "dense", "derby", "desk", "dial", "dice", "died", "diet", "diff", "dime", "ding", "dink",
  "dips", "dire", "dirt", "dish", "disk", "dive", "dock", "dodge", "doer", "does", "doge",
  "doll", "dome", "done", "door", "dose", "dote", "douse", "dove", "down", "drake", "draw",
  "dread", "dream", "dress", "drift", "drink", "drive", "drop", "drum", "drys", "duff", "dull",
  "dune", "dusk", "dust", "duty", "dwarf", "dwell", "dyke", "each", "eager", "early", "earth",
  "ease", "east", "easy", "eat", "echo", "eddy", "edge", "edit", "eddy", "eel", "eerie", "effort",
  "elate", "elbow", "elder", "elect", "elite", "empty", "envy", "equal", "equip", "erase", "erupt",
  "essay", "evict", "event", "every", "evil", "exact", "exile", "extra", "exult", "face", "fact",
  "fade", "fail", "fair", "fake", "fall", "fame", "fang", "fare", "farm", "fast", "fate", "faux",
  "fear", "feat", "feed", "feel", "feet", "fell", "felt", "fend", "fern", "fest", "fiat", "fib",
  "fig", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "fist", "five", "fix",
  "flag", "flat", "flaw", "flip", "flit", "float", "flock", "flop", "flow", "flue", "flung", "flush",
  "foam", "fold", "folk", "food", "foot", "foray", "fore", "fork", "form", "fort", "foul", "four",
  "free", "fret", "frog", "from", "fuel", "full", "fund", "funk", "furl", "fuse", "fuss", "gain",
  "game", "gang", "gap", "gate", "gave", "gaze", "gear", "geek", "gene", "gent", "germ", "gift",
  "gift", "girl", "give", "glad", "glam", "glare", "glass", "gleam", "glee", "glen", "glint", "glob",
  "gloom", "glory", "glove", "glow", "glue", "gnaw", "goal", "goat", "gold", "golf", "gone", "good",
  "gore", "gorge", "gory", "got", "gown", "gray", "gray", "gray", "gray", "gray", "gray", "gray",
  "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray",
  "gray", "gray", "gray"
]; // add more!

// --- Pick answer ---
const answer = answers[Math.floor(Math.random() * answers.length)];

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
    if (currentGuess.length === 5) {
      if (!validGuesses.includes(currentGuess)) {
        alert("Not in word list!");
        return; // reject invalid word
      }
      checkGuess();
    }
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
