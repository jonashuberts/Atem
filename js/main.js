const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");

const inhaleDuration = 4;
const inhaleHoldDuration = 7;
const exhaleDuration = 8;
const exhaleHoldDuration = 0;
const repetitions = 2;

let repetitionCount = 0;
const animationDuration =
  (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) *
  1000; // in Millisekuden
const totalDuration =
  (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) *
  repetitions *
  1000; // in Millisekunden

// Funktion, um die progressbar zu aktualliesieren
function updateCircularProgress(progressValue) {
  circularProgress.style.background = `conic-gradient(#201a1a ${
    progressValue * 3.6
  }deg, #fffbff 0deg)`;
}

// Funktion, um die progressbar zu animieren
function animateProgressBar(duration) {
  const intervalTime = 10; // Aktualisierung alle 10 Millisekunden
  const totalSteps = duration / intervalTime;
  let progressValue = 0;
  let currentStep = 0;

  const interval = setInterval(() => {
    progressValue = (currentStep / totalSteps) * 100;
    updateCircularProgress(progressValue);

    currentStep++;

    if (currentStep > totalSteps) {
      clearInterval(interval);
    }
  }, intervalTime);
}

// Funktion, um die Animation zu starten
function playAnimations() {
  if (repetitionCount >= repetitions) {
    return; // Stoppe die Animation nach der zehnten Wiederholung
  }

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

  repetitionCount++;
  setTimeout(playAnimations, animationDuration);
}

// Animierte Progressbar beim Laden der Seite starten
animateProgressBar(totalDuration);

// Animationen beim Laden der Seite starten
playAnimations();

// Animire den outer marker beim laden der webseite
window.addEventListener("load", function () {
  var outerMarker = document.getElementById("outer-marker");
  outerMarker.style.width = "400px";
  outerMarker.style.height = "400px";
});

// JavaScript für den Übergang
const transitionLink = document.getElementById("transition-link");
transitionLink.addEventListener("click", function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links

  document.body.classList.add("transition-fade", "fade-out");

  setTimeout(function () {
    window.location.href = transitionLink.href;
  }, 500); // Warte 500 Millisekunden, bevor die Weiterleitung stattfindet
});
