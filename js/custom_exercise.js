const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");
var infoBox = document.getElementById("info-box");
var closeBtn = document.getElementById("start-btn");
let isEndSoundPlayed = false;
let repetitionCount = 0;
let ambientSound = null;

// Parameter der Atemzeiten aus der URL lesen und in die Eingabefelder eintragen
const params = new URLSearchParams(window.location.search);
document.querySelector("#inhaleDurationInput").value = params.get("inhale");
document.querySelector("#inhaleHoldDurationInput").value =
  params.get("inhaleHold");
document.querySelector("#exhaleDurationInput").value = params.get("exhale");
document.querySelector("#exhaleHoldDurationInput").value =
  params.get("exhaleHold");
document.querySelector("#repetitionInput").value = params.get("repetitions");

// Funktion zum Abspielen eines Tons
function playSound(url) {
  var audio = new Audio(url);
  audio.load();
  audio.play();
}

// Funktion zum Abspielen von Hintergrundgeräuschen
function playAmbientSound(url) {
  ambientSound = new Audio(url);
  ambientSound.loop = true;
  ambientSound.play();
}

// Funktion zum Ausschalten der Hintergrundmusik
function stopAmbientSound() {
  if (ambientSound) {
    ambientSound.pause();
    ambientSound.currentTime = 0;
    ambientSound = null;
  }
}

// Array mit den Dateinamen der Ambient-Sounds
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

// Funktion zur zufälligen Auswahl eines Ambient-Sounds
function getRandomAmbientSound() {
  const randomIndex = Math.floor(Math.random() * ambientSounds.length);
  const soundFile = ambientSounds[randomIndex];
  return soundFile;
}

// Funktion zur Aktualisierung der Fortschrittsanzeige
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

// Funktion zur Animation des runden Fortschrittsbalkens
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

// Funktion für den Timer
function startTimer(duration) {
  let startTime = null;

  function timer(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsed = timestamp - startTime;
    const seconds = Math.ceil((duration * 1000 - elapsed) / 1000);

    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

    document.querySelector(
      "#timer"
    ).textContent = `${minutes}:${remainingSeconds}`;

    if (elapsed < duration * 1000) {
      requestAnimationFrame(timer);
    } else {
      document.querySelector("#timer").textContent = "00:00";
    }
  }

  requestAnimationFrame(timer);
}

// Funktion für den Timer eines Atemzyklus
function startInstructionTimer(duration, instruction) {
  let startTime = null;

  function timer(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsed = timestamp - startTime;
    const seconds = Math.ceil(duration - elapsed / 1000);

    const instructionText =
      instruction === "Fertig" ? "Fertig" : `${instruction} ${seconds}`;
    document.querySelector("#instruction").textContent = instructionText;

    if (elapsed < duration * 1000) {
      requestAnimationFrame(timer);
    } else {
      document.querySelector("#instruction").textContent = "Fertig";
    }
  }

  requestAnimationFrame(timer);
}

// Funktion zum Starten der Atmungsanimation
function playAnimations() {
  if (repetitionCount >= repetitions) {
    return;
  }
  startInstructionTimer(inhaleDuration, "Einatmen"); //

  if (inhaleHoldDuration > 0) {
    setTimeout(() => {
      startInstructionTimer(inhaleHoldDuration, "Halten"); //
    }, inhaleDuration * 1000);
  }

  setTimeout(() => {
    startInstructionTimer(exhaleDuration, "Ausatmen"); //
  }, (inhaleDuration + inhaleHoldDuration) * 1000);

  if (exhaleHoldDuration > 0) {
    setTimeout(() => {
      startInstructionTimer(exhaleHoldDuration, "Halten"); //
    }, (inhaleDuration + inhaleHoldDuration + exhaleDuration) * 1000);
  }

  circle.style.animation = "none";
  void circle.offsetWidth;
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

// Funkktion für den Seitenwechsel
const transitionLink = document.getElementById("transition-link");
transitionLink.addEventListener("click", function (event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Links

  document.body.classList.add("transition-fade", "fade-out");

  setTimeout(function () {
    window.location.href = transitionLink.href;
  }, 500); // Warte 500 Millisekunden, bevor die Weiterleitung stattfindet
});

// Funktion zum Anwenden des Themas
function applyTheme(theme) {
  // Entferne vorhandene Themenklassen vom body-Element
  document.body.classList.remove("theme-system", "theme-light", "theme-dark");
  // Füge die entsprechende Klasse für das ausgewählte Thema hinzu
  document.body.classList.add(`theme-${theme}`);
}

// Funktion zum Auslesen und Speichern der Werte aus der Infobox
function getInputs() {
  inhaleDuration = parseInt(
    document.querySelector("#inhaleDurationInput").value
  );
  inhaleHoldDuration = parseInt(
    document.querySelector("#inhaleHoldDurationInput").value
  );
  exhaleDuration = parseInt(
    document.querySelector("#exhaleDurationInput").value
  );
  exhaleHoldDuration = parseInt(
    document.querySelector("#exhaleHoldDurationInput").value
  );
  repetitions = parseInt(document.querySelector("#repetitionInput").value);

  animationDuration =
    (inhaleDuration +
      inhaleHoldDuration +
      exhaleDuration +
      exhaleHoldDuration) *
    1000; // in Millisekunden

  totalDuration =
    (inhaleDuration +
      inhaleHoldDuration +
      exhaleDuration +
      exhaleHoldDuration) *
    repetitions *
    1000; // in Millisekunden

  console.log("lokal total duration " + totalDuration);

  // Aktualisierung des Timers auf die Eingabewerte
  minutes = parseInt(totalDuration / 1000 / 60, 10);
  seconds = parseInt((totalDuration / 1000) % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (isNaN(totalDuration) === false) {
    document.querySelector("#timer").textContent = minutes + ":" + seconds;
  }
}

// Warte, bis das DOM geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Infobox anzeigen
  infoBox.style.display = "block";

  // Aktualisierung des Timers beim Laden der Seite
  getInputs();

  // Starten, wenn die Infobox geschlossen wird
  closeBtn.addEventListener("click", function () {
    infoBox.style.display = "none";

    // Timer beim Laden der Seite starten
    startTimer(totalDuration / 1000);

    // Animationen beim Laden der Seite starten
    playAnimations();

    // Animierte Fortschrittsanzeige beim Laden der Seite starten
    animateProgressBar(totalDuration);

    // Ton beim Start der Übung abspielen
    playSound("assets/sound/start.mp3");

    // Umgebungsgeräusch zu Beginn der Übung abspielen
    const randomAmbientSound = getRandomAmbientSound();
    playAmbientSound(randomAmbientSound);

    // Ton am Ende der Atemübung abspielen und die Anweisung mit "Fertig" beenden
    setTimeout(() => {
      if (!isEndSoundPlayed) {
        startInstructionTimer(0, "Fertig");
        playSound("assets/sound/ende1.mp3");
        isEndSoundPlayed = true;
      }
      stopAmbientSound(); // Umgebungslärm abschalten
    }, totalDuration);

    /*   
    // Äußere Markierung beim Laden der Seite animieren
  window.addEventListener("load", function () {
    var outerMarker = document.getElementById("outer-marker");
    outerMarker.style.width = "400px";
    outerMarker.style.height = "400px";
  }); */
  });

  // Das gespeicherte Thema aus dem lokalen Speicher abrufen oder "system" als Standard verwenden
  const savedTheme = localStorage.getItem("theme") || "system";

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
