const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");

const inhaleDuration = 4;
const inhaleHoldDuration = 7;
const exhaleDuration = 8;
const exhaleHoldDuration = 0;
const animationDuration = (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) * 1000;

// Funktion, um die progressbar zu aktualliesieren
function updateCircularProgress(progressValue) {
  circularProgress.style.background = `conic-gradient(#000000 ${progressValue * 3.6}deg, #ffffff 0deg)`;
}

updateCircularProgress(75); // Aktualisiert den Fortschritt auf 75


// Funktion, um die Animation zu starten
function playAnimations() {
  circle.style.animation = "none"; // Animationen zurücksetzen
  void circle.offsetWidth; // Repaint erzwingen
  circle.style.animation =
    "inhaleAnimation " +
    inhaleDuration +
    "s cubic-bezier(0.3, 0.00, 0.7, 1), inhaleHoldAnimation " +
    inhaleHoldDuration +
    "s " +
    inhaleDuration +
    "s cubic-bezier(0.3, 0.00, 0.7, 1), exhaleAnimation " +
    exhaleDuration +
    "s " +
    (inhaleDuration + inhaleHoldDuration) +
    "s cubic-bezier(0.3, 0.00, 0.7, 1), exhaleHoldAnimation " +
    exhaleHoldDuration +
    "s " +
    (inhaleDuration + inhaleHoldDuration + exhaleDuration) +
    "s cubic-bezier(0.3, 0.00, 0.7, 1)";

  setTimeout(playAnimations, animationDuration);
}

// Aktualisiert den Fortschritt auf 75
updateCircularProgress(75); 

// Animationen beim Laden der Seite starten
playAnimations();