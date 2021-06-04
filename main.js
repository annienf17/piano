//audio
const keysAudio = document.querySelectorAll(".key");
keysAudio.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}
// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
const keyPlay = function (event) {
  event.target.style.boxShadow = "none";
};
const keyReturn = function (event) {
  event.target.style.boxShadow = "";
};

// Write a named function with event handler properties
let eventAssignment = function (note) {
  note.onmousedown = function () {
    keyPlay(event);
  };
  note.onmouseup = function () {
    keyReturn(event);
  };
};

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

//Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  //point 10 po wcisnieciu button zmienia sie music guide
  document.getElementById("letter-note-five").innerHTML = "A";
  document.getElementById("letter-note-six").innerHTML = "G";
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  lastLyric.style.display = "inline-block";
  //13 zmienia napis po kliknieciu przycisku line
  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI";
  document.getElementById("letter-note-three").innerHTML = "D";
  document.getElementById("letter-note-four").innerHTML = "B";
  document.getElementById("letter-note-five").innerHTML = "G";
  document.getElementById("letter-note-six").innerHTML = "F";
};
// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;
  lastLyric.style.display = "none";

  document.getElementById("word-one").innerHTML = "HAP";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU!";

  document.getElementById("letter-note-one").innerHTML = "C";
  document.getElementById("letter-note-two").innerHTML = "C";
  document.getElementById("letter-note-three").innerHTML = "B";
  document.getElementById("letter-note-four").innerHTML = "G";
  document.getElementById("letter-note-five").innerHTML = "A";
  document.getElementById("letter-note-six").innerHTML = "G";
};

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("letter-note-one").innerHTML = "D";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("letter-note-two").innerHTML = "D";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("letter-note-four").innerHTML = "D";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("letter-note-five").innerHTML = "G";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-six").innerHTML = "F";
};
