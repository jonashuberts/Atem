const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");

const inhaleDuration = 4;
const inhaleHoldDuration = 7;
const exhaleDuration = 8;
const exhaleHoldDuration = 0;
const repetitions = 5;

let isEndSoundPlayed = false;
let repetitionCount = 0;
const animationDuration =
  (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) *
  1000; // in Millisekunden

const totalDuration =
  (inhaleDuration + inhaleHoldDuration + exhaleDuration + exhaleHoldDuration) *
  repetitions *
  1000; // in Millisekunden

function playSound(url) {
  var audio = new Audio(url);
  audio.load();
  audio.play();
}

let ambientSound = null;

// Funktion zum Abspielen des Ambient Sounds
function playAmbientSound(url) {
  ambientSound = new Audio(url);
  ambientSound.loop = true;
  ambientSound.play();
}

// Funktion zum Stoppen des Ambient Sounds
function stopAmbientSound() {
  if (ambientSound) {
    ambientSound.pause();
    ambientSound.currentTime = 0;
    ambientSound = null;
  }
}

// Array mit den Dateinamen der Ambient Sounds im Ambient-Ordner
const ambientSounds = [
  "assets/sound/ambient/ES_369 Seconds Of Bliss - 369.mp3",
  "assets/sound/ambient/ES_A Spirit Level - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Android Dreamscape - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Crystalis - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Ethereal Earth - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Field of Horses - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Genetic Waves - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Golden Chant - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Imaginary Waterfalls - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Inside the Fog - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Leaving Moscow - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Meditation Aquatic - 369.mp3",
  "assets/sound/ambient/ES_Opposite to Destruction - Hanna Lindgren.mp3",
  "assets/sound/ambient/ES_Summoning of Orcas - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Teegarden C - By Lotus.mp3",
  "assets/sound/ambient/ES_Tides and Drift - Joseph Beg.mp3",
  "assets/sound/ambient/ES_Until You Don't Even Notice Anymore - Hanna Lindgren.mp3",
];

// Funktion zum Zufälligen Auswählen eines Ambient Sounds// Funktion zum Zufälligen Auswählen eines Ambient Sounds
function getRandomAmbientSound() {
  const randomIndex = Math.floor(Math.random() * ambientSounds.length);
  const soundFile = ambientSounds[randomIndex];
  return soundFile;
}

// Funktion, um die progressbar zu aktualisieren
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

  /* playSound("assets/sound/inhale.wav"); // Sound beim Einatmen abspielen */
  document.querySelector("#instruction").textContent = "Einatmen"; // Text aktualisieren

  if (inhaleHoldDuration > 0) {
    setTimeout(() => {
      /* playSound("assets/sound/hold.wav"); // Sound beim Halten nach dem Einatmen abspielen */
      document.querySelector("#instruction").textContent = "Halten"; // Text aktualisieren
    }, inhaleDuration * 1000);
  }

  setTimeout(() => {
    /* playSound("assets/sound/exhale.wav"); // Sound beim Ausatmen abspielen */
    document.querySelector("#instruction").textContent = "Ausatmen"; // Text aktualisieren
  }, (inhaleDuration + inhaleHoldDuration) * 1000);

  if (exhaleHoldDuration > 0) {
    setTimeout(() => {
      /* playSound("assets/sound/hold.wav"); // Sound beim Halten nach dem Ausatmen abspielen */
      document.querySelector("#instruction").textContent = "Halten"; // Text aktualisieren
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

    // Sound beim Start der Übung abspielen
    playSound("assets/sound/start.mp3");

    // Ambient Sound beim Start der Übung abspielen
    const randomAmbientSound = getRandomAmbientSound();
    playAmbientSound(randomAmbientSound);

    // Ton am Ende der Atemübung abspielen
    setTimeout(() => {
      if (!isEndSoundPlayed) {
        document.querySelector("#instruction").textContent = "Fertig"; // Text aktualisieren
        playSound("assets/sound/ende1.mp3");
        isEndSoundPlayed = true;
      }
      stopAmbientSound(); // Ambient Sound stoppen
    }, totalDuration);

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
