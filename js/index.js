// Funktion zum Anwenden des Themas
function applyTheme(theme) {
  // Entferne vorhandene Themenklassen vom body-Element
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  // Füge die entsprechende Klasse für das ausgewählte Thema hinzu
  document.body.classList.add(`theme-${theme}`);
}

/* Page Transition */
/* const transitionLinks = document.getElementsByClassName("transition-link");
Array.from(transitionLinks).forEach(function (transitionLink) {
  transitionLink.addEventListener("click", function (event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links

    document.body.classList.add("transition-fade", "fade-out");

    setTimeout(function () {
      window.location.href = transitionLink.href;
    }, 500); // Warte 500 Millisekunden, bevor die Weiterleitung stattfindet
  });
}); */

// Warte, bis das DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
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

document.addEventListener("touchmove", function (e) {
  e.preventDefault();
}, { passive: false });

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});