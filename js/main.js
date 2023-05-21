const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");

const inhaleDuration = 4;
const inhaleHoldDuration = 7;
const exhaleDuration = 8;
const exhaleHoldDuration = 0;
const repetitions = 10;

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

// Funktion, um die runde Progressbar zu animieren
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

// Funktion, um die Atem Animation zu starten
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

// Funkktion für die Page Transition
const transitionLink = document.getElementById("transition-link");
transitionLink.addEventListener("click", function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links

  document.body.classList.add("transition-fade", "fade-out");

  setTimeout(function () {
    window.location.href = transitionLink.href;
  }, 500); // Warte 500 Millisekunden, bevor die Weiterleitung stattfindet
});

// Funktion für den Timer
function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  var interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#timer").textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      timer = 0; // Timer bleibt bei 0 Sekunden stehen
    }
  }, 1000);
}

// window.onload = function () { // Starten, wenn ales inklusive css und bilder geladen sind
document.addEventListener("DOMContentLoaded", function () {
  // Starten, wenn html geladen ist
  var infoBox = document.getElementById("info-box");
  var closeBtn = document.getElementById("close-btn");

  infoBox.style.display = "block";

  closeBtn.addEventListener("click", function () {
    infoBox.style.display = "none";

    // Timer beim Laden der Seite starten
    startTimer(totalDuration / 1000);

    // Animierte Progressbar beim Laden der Seite starten
    animateProgressBar(totalDuration);

    // Animationen beim Laden der Seite starten
    playAnimations();

    /*   // Outer marker beim Laden der Seite annimieren
  window.addEventListener("load", function () {
    var outerMarker = document.getElementById("outer-marker");
    outerMarker.style.width = "400px";
    outerMarker.style.height = "400px";
  }); */
  });
});
