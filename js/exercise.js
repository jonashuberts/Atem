const circle = document.getElementById("circle");
const circularProgress = document.querySelector("#circular-progress");
let isEndSoundPlayed = false;
let repetitionCount = 0;

const params = new URLSearchParams(window.location.search);
const exercise = params.get("practice");
console.log(`Die Uebung ist ${exercise}`);

// Funktion um die Parameter leicht zu setzen
function setExerciseParameters(inhale, inhaleHold, exhale, exhaleHold, rep) {
  inhaleDuration = inhale;
  inhaleHoldDuration = inhaleHold;
  exhaleDuration = exhale;
  exhaleHoldDuration = exhaleHold;
  repetitions = rep;
}

if (exercise === "4-7-8_Atemtechnik") {
  document.querySelector("#info-text").textContent =
    "Atme durch die Nase ein und zähle dabei bis vier. Halte den Atem für sieben Sekunden an und atme dann langsam durch den Mund aus, bis du bis acht gezählt hast. Wiederhole dies mehrere Male.";
  setExerciseParameters(4, 7, 8, 0, 5);
} else if (exercise === "Wechselatmung") {
  document.querySelector("#info-text").textContent =
    "Schließe das rechte Nasenloch mit dem Daumen und atme durch das linke Nasenloch ein. Halte den Atem kurz an und schließe dann das linke Nasenloch mit dem Ringfinger. Öffne das rechte Nasenloch und atme durch dieses aus. Atme dann durch das rechte Nasenloch ein, halte den Atem an, schließe das rechte Nasenloch und atme durch das linke Nasenloch aus. Wiederhole dies abwechselnd für mehrere Zyklen.";
  setExerciseParameters(4, 2, 6, 2, 20);
} else if (exercise === "Bauchatmung") {
  document.querySelector("#info-text").textContent =
    "Lege eine Hand auf deinen Bauch und atme tief durch die Nase ein, sodass sich dein Bauch ausdehnt. Halte den Atem kurz an und atme dann langsam durch den Mund aus, während sich dein Bauch wieder zusammenzieht. Konzentriere dich darauf, die Atmung tief in den Bauch zu lenken und entspanne dich dabei.";
  setExerciseParameters(4, 2, 6, 2, 10);
} else if (exercise === "Progressive_Muskelentspannung") {
  document.querySelector("#info-text").textContent =
    "Spanne während des Einatmens verschiedene Muskelgruppen deines Körpers an, halte die Spannung kurz und entspanne die Muskeln dann während des Ausatmens. Beginne beispielsweise mit den Füßen, arbeite dich hoch zu den Beinen, dem Bauch, den Armen und dem Gesicht. Konzentriere dich auf das Gefühl der Entspannung während des Ausatmens.";
  setExerciseParameters(4, 4, 6, 4, 28);
} else if (exercise === "Zaehlende_Atemtechnik") {
  document.querySelector("#info-text").textContent =
    "Zähle beim Einatmen bis vier, halte den Atem für vier Sekunden an, atme dann langsam aus und halte erneut für vier Sekunden an, bevor du erneut einatmest. Diese gleichmäßige Zählung kann dabei helfen, den Atem zu beruhigen und eine entspannte Atmosphäre zu schaffen.";
  setExerciseParameters(4, 4, 4, 4, 6);
} else if (exercise === "Schnelle_Ausatmung") {
  document.querySelector("#info-text").textContent =
    "Atme schnell und kraftvoll durch die Nase ein, halte den Atem kurz an und atme dann kräftig durch den Mund aus. Wiederhole dies für mehrere Zyklen. Diese Technik kann dazu beitragen, Spannungen abzubauen und den Geist zu klären.";
  setExerciseParameters(2, 2, 6, 2, 5);
} else if (exercise === "Feueratem") {
  document.querySelector("#info-text").textContent =
    "Atme schnell und rhythmisch durch die Nase ein und aus, ähnlich wie beim Hecheln. Konzentriere dich auf die schnellen Atemzüge und den Energiefluss im Körper. Diese Technik wird oft in der Yoga-Praxis verwendet und kann helfen, Energie zu mobilisieren und den Geist zu aktivieren.";
  setExerciseParameters(1, 0, 1, 0, 20);
} else if (exercise === "Entspanntes_Seufzen") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und tief durch die Nase ein, halte den Atem kurz an und atme dann mit einem tiefen Seufzer durch den Mund aus. Stelle dir vor, dass du damit Anspannung und Belastungen loslässt. Wiederhole dies mehrere Male, um eine tiefe Entspannung zu erreichen.";
  setExerciseParameters(4, 2, 8, 2, 38);
} else if (exercise === "Die_5er-Uebung") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und bewusst ein und zähle dabei bis fünf. Atme dann langsam aus und zähle erneut bis fünf. Wiederhole dies für mehrere Zyklen. Konzentriere dich auf den gleichmäßigen Atemrhythmus.";
  setExerciseParameters(5, 0, 5, 0, 30);
} else if (exercise === "Laenger_Ausatmen") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und tief ein und verlängere dann bewusst die Ausatmung, indem du den Atemfluss länger kontrolliert ausströmen lässt. Fokussiere dich auf den ruhigen Atemrhythmus und entspanne dich während des Ausatmens.";
  setExerciseParameters(5, 0, 10, 0, 20);
} else if (exercise === "4-7-11_Atemtechnik") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und tief ein und zähle dabei bis vier. Halte den Atem an und zähle bis sieben. Atme dann langsam aus und zähle bis elf. Diese Atemtechnik kann helfen, den Atem zu verlangsamen und eine tiefe Entspannung zu fördern.";
  setExerciseParameters(4, 0, 7, 0, 60);
} else if (exercise === "4-4-4_Atemtechnik") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und bewusst ein und zähle dabei bis vier. Halte den Atem an und zähle bis vier. Atme dann langsam aus und zähle erneut bis vier. Diese gleichmäßige Zählung kann dazu beitragen, den Atemrhythmus zu harmonisieren und eine entspannte Atmosphäre zu schaffen.";
  setExerciseParameters(4, 4, 4, 0, 20);
} else if (exercise === "Tiefe_Atmung") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und tief ein, indem du bewusst den Bauchraum mit Luft füllst. Halte den Atem kurz an und atme dann langsam aus. Konzentriere dich auf das Gefühl der tieferen Atmung und den ruhigen Atemrhythmus.";
  setExerciseParameters(4, 4, 6, 0, 43);
} else if (exercise === "Gleichmaeßige_Atmung") {
  document.querySelector("#info-text").textContent =
    "Atme langsam und gleichmäßig ein und aus, indem du den Atemfluss bewusst kontrollierst. Konzentriere dich auf den gleichmäßigen Atemrhythmus und versuche, ihn ruhig und entspannt zu gestalten.";
  setExerciseParameters(4, 0, 4, 0, 8);
} else {
  document.querySelector("#info-text").textContent =
    "Atme langsam und bewusst ein, zähle dabei bis sechs. Halte den Atem an und zähle bis drei. Atme dann langsam aus und zähle erneut bis sechs. Halte den Atem erneut an und zähle bis drei. Wiederhole dieses Muster für mehrere Zyklen. Konzentriere dich auf den rhythmischen Atemfluss und die gleichmäßigen Atemphasen.";
  setExerciseParameters(6, 3, 6, 3, 16);
}

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

// Funktion für den Timer
function startTimer(duration) {
  let timer = duration;

  let interval = setInterval(() => {
    const minutes = Math.floor(timer / 60).toString().padStart(2, "0");
    const seconds = (timer % 60).toString().padStart(2, "0");

    document.querySelector("#timer").textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      timer = 0;
    }
  }, 1000);
}

// Funktion für den Insrruction Timer
function startInstructionTimer(duration, instruction) {
  let timer = duration;

  let interval = setInterval(() => {
    const seconds = parseInt(timer, 10);
    const instructionText =
      instruction === "Fertig" ? "Fertig" : `${instruction} ${seconds}`;
    document.querySelector("#instruction").textContent = instructionText;
    if (--timer < 0) {
      clearInterval(interval);
      timer = 0; // Timer bleibt bei 0 Sekunden stehen
    }
  }, 1000);
}

// Funktion, um die Atem Animation zu starten
function playAnimations() {
  if (repetitionCount >= repetitions) {
    return; // Stoppe die Animation nach der zehnten Wiederholung
  }
  /* document.querySelector("#instruction").textContent = "Einatmen"; // Text aktualisieren */
  startInstructionTimer(inhaleDuration, "Einatmen"); //

  if (inhaleHoldDuration > 0) {
    setTimeout(() => {
      /* document.querySelector("#instruction").textContent = "Halten"; // Text aktualisieren */
      startInstructionTimer(inhaleHoldDuration, "Halten"); //
    }, inhaleDuration * 1000);
  }

  setTimeout(() => {
    /* document.querySelector("#instruction").textContent = "Ausatmen"; // Text aktualisieren */
    startInstructionTimer(exhaleDuration, "Ausatmen"); //
  }, (inhaleDuration + inhaleHoldDuration) * 1000);

  if (exhaleHoldDuration > 0) {
    setTimeout(() => {
      /* document.querySelector("#instruction").textContent = "Halten"; // Text aktualisieren */
      startInstructionTimer(exhaleHoldDuration, "Halten"); //
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

  // Starten, wenn die Infobox geschlossen wird
  closeBtn.addEventListener("click", function () {
    infoBox.style.display = "none";

    // Animationen beim Laden der Seite starten
    playAnimations();

    // Sound beim Start der Übung abspielen
    playSound("assets/sound/start.mp3");

    // Animierte Progressbar beim Laden der Seite starten
    animateProgressBar(totalDuration);

    // Timer beim Laden der Seite starten
    startTimer(totalDuration / 1000);

    // Ambient Sound beim Start der Übung abspielen
    const randomAmbientSound = getRandomAmbientSound();
    playAmbientSound(randomAmbientSound);

    // Ton am Ende der Atemübung abspielen und Instruction auf fertig setzen
    setTimeout(() => {
      if (!isEndSoundPlayed) {
        startInstructionTimer(0, "Fertig");
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
