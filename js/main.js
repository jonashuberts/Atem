const circle = document.getElementById("circle");

const inhaleDuration = 4;
const inhaleHoldDuration = 2;
const exhaleDuration = 4;
const exhaleHoldDuration = 2;
const animationDuration = (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) * 1000;

// Funktion, um die Animationen wieder neu zu starten
function playAnimations() {
  circle.style.animation = "none"; // Animationen zurücksetzen
  void circle.offsetWidth; // Repaint erzwingen
  circle.style.animation =
    "inhaleAnimation " +
    inhaleDuration +
    "s, inhaleHoldAnimation " +
    inhaleHoldDuration +
    "s " +
    inhaleDuration +
    "s, exhaleAnimation " +
    exhaleDuration +
    "s " +
    (inhaleDuration + inhaleHoldDuration) +
    "s, exhaleHoldAnimation " +
    exhaleHoldDuration +
    "s " +
    (inhaleDuration + inhaleHoldDuration + exhaleDuration) +
    "s";

    setTimeout(playAnimations, animationDuration);
}

// Animationen beim Laden der Seite starten
playAnimations();