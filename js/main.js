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

function playSound(url) {
  var audio = new Audio(url);
  audio.load();
  audio.play();
}

// Funktion, um die progressbar zu aktualliesieren
function updateCircularProgress(progressValue) {
  const lightMode = document.body.classList.contains("theme-light");
  const startColor = lightMode
    ? "#201a1a"
    : "#ede0de"; /* Progress indicator, darkmode : light */
  const endColor = lightMode
    ? "#fffbff"
    : "#201a1a"; /* Background color, darkmode : light */
  circularProgress.style.background = `conic-gradient(${startColor} ${
    progressValue * 3.6
  }deg, ${endColor} 0deg)`;
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

  playSound("assets/sound/inhale.wav"); // Sound beim Einatmen abspielen

  if (inhaleHoldDuration > 0) {
    setTimeout(() => {
      playSound("assets/sound/hold.wav"); // Sound beim Halten nach dem Einatmen abspielen
    }, inhaleDuration * 1000);
  }

  setTimeout(() => {
    playSound("assets/sound/exhale.wav"); // Sound beim Ausatmen abspielen
  }, (inhaleDuration + inhaleHoldDuration) * 1000);

  if (exhaleHoldDuration > 0) {
    setTimeout(() => {
      playSound("assets/sound/hold.wav"); // Sound beim Halten nach dem Ausatmen abspielen
    }, (inhaleDuration + inhaleHoldDuration + exhaleDuration) * 1000);
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
// Funktion zum Anwenden des Themas
function applyTheme(theme) {
  // Entferne vorhandene Themenklassen vom body-Element
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  // Füge die entsprechende Klasse für das ausgewählte Thema hinzu
  document.body.classList.add(`theme-${theme}`);
}

// window.onload = function () { // Starten, wenn ales inklusive css und bilder geladen sind
document.addEventListener("DOMContentLoaded", function () {
  // Timer initialisieren
  minutes = parseInt(totalDuration / 1000 / 60, 10);
  seconds = parseInt((totalDuration / 1000) % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.querySelector("#timer").textContent = minutes + ":" + seconds;

  // Starten, wenn html geladen ist
  var infoBox = document.getElementById("info-box");
  var closeBtn = document.getElementById("start-btn");

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

  // Das gespeicherte Thema aus dem lokalen Speicher abrufen oder "auto" als Standard verwenden
  const savedTheme = localStorage.getItem("theme") || "auto";

  // Das gespeicherte Thema anwenden
  applyTheme(savedTheme);

  // Die Option des gespeicherten Themas im Dropdown-Menü auswählen
  for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  // Event-Listener für Änderungen des Dropdown-Menüs hinzufügen
  document.querySelector("#selTheme").addEventListener("change", function () {
    // Das ausgewählte Thema im lokalen Speicher speichern
    localStorage.setItem("theme", this.value);
    // Das ausgewählte Thema anwenden
    applyTheme(this.value);
  });
});
