#Projektbericht

## Planung und Vorbereitung

### 1. Thema festlegen (Idee)

Atemübungs-App 😤

### 2. Produkt definieren (Ziel)

Die App präsentiert die Atemübungen auf visuell ansprechende und animierte Weise, begleitet von Soundeffekten. Benutzer können aus einer Liste von Übungen auswählen, und es wird eine kurze Beschreibung der Funktion und Wirkung jeder Übung angezeigt.

### 3. Recherchieren zu ähnlichen Projekten und Designs

#### Atmung

- Kreis mit Zahn in der Mitte
- Dünner Kreis als Fortschritt
- Striche um den Kreis als dynamische Animation
- Kleinere Kreise um den Kreis als Partikel, die sich dem Kreis nähern und von ihm entfernt werden.
- Kreis mit mehreren sich drehenden unförmigen Kreisen
- Kreis, der sich in zwei Schritten ausdehnt und zusammenzieht
- Tippen für Pause
- Timer
- Zurückbutton

#### Startseite

- Einstellungen-Symbol
- Favoriten-Symbol
- Titel
- Liste der Übungen und Beschreibungen
- Kleinerer unterer Bereich mit benutzerdefiniertem Atemtest

### 4. Programmiersprache, Framework und Tools auswählen

HTML: Vanilla Own Code, https://grapesjs.com/, https://www.vvveb.com/vvvebjs/editor.html, https://github.com/silexlabs/Silex
CSS: Vanilla Own Code, https://codyhouse.co/, https://csslayout.io/, https://uiverse.io/
JavaScript: Vanilla Own Code, https://extendsclass.com/python-to-javascript.html, http://reeborg.ca/docs/js_py_en/conversion.html

## Projektorganisation und Zeitplanung

### 6. Erstellung eines Zeitplans

Siehe Goodnotes

### 7. Entwicklungsumgebungen einrichten

Programm: VisualStudi Code und Codepen
Extensions: Inline fold, Auto Commit Message, German Language Pack, Live Server, Markdoen All in One, Prittier, Tabnine AI, Xmind viwer
Sound: Signal
GitHub: jonashuberts/Atem
Netify: https://atemuebungen.netlify.app/

## Design und Architektur

### 8. UI-Design entwerfen

- Farbe für material theme builder: #dc092f
- Figma: https://www.figma.com/file/7m8jFzmlcxW7UoGpX0mbmM/Projekt?type=design&node-id=0-1&t=o25OEU6ix0RNDzPv-0

### 9. Systemarchitektur entwerfen (Klassen, Subsysteme, Ablaufdiagramm)

- Enthält keine algorithmen nur UI
- In Xmind

## Entwicklung

### 10. Minimales funktionsfähiges Produkt erstellen (Minimal Viable Product, MVP)

Atem Übung

### 11. Produkt weiterentwickeln und erweitern

Homepage

### 11.5 Ton Hinzufügen

https://www.epidemicsound.com/de/music/search/?genres=Ambient&length=298%2C928&moods=Relaxing&term=meditation&vocals=false
https://pixabay.com/sound-effects/search/end/?duration=0-30

## Testing und Qualitätssicherung

### 12. Produkt testen und Fehler beheben

Responsive design und Start button bug auf mobile behoben

### 13. Benutzerfreundlichkeit überprüfen und gegebenenfalls verbessern

instruction anzeigen wann atmen, halten, ausatmen

### 14. Performance-Optimierung durchführen, um die Leistung des Produkts zu verbessern (Code verbessern)

## Bereitstellung und Veröffentlichung

### 15. Produkt deployen und veröffentlichen

Netify: https://app.netlify.com/sites/atemuebungen/settings/general
Site: https://atemuebungen.netlify.app/

## Dokumentation und Bericht

### 16. Produkt dokumentieren (Codekommentare, Benutzerhandbuch, Screenshots erstellen)

### 17. Projektbericht schreiben

### 18. Dokumentation in den Projektbericht einfügen

Quellcode, Screenshots, Diagramme, Dokumente, Bildquellen, Textquellen

### 19. Projektbericht überarbeiten, kontrollieren und vervollständigen

### 20. Projektbericht zur Kontrolle einreichen

### 21. Projektbericht abgeben

## Weitere Ideen

### Corpuls:

Heute:
- Bericht auf richtige Länge bringen
- Bericht kontrollieren

Später:

- code commentare hinzufügen / verbessern, code aufräumen / strukturieren
- serviceworcer und manifest überarbeiten + github readme erstellen

## Zukunft:

- Konto mit Favoriten
- Fortschritte von Konto verfolgen und teilen
- Archiv
- Werbung um Geld zu verdienen
- Blog mit in depth informationen zur atmung
- Vibrations Feedback bei den Übungen
- Krankheiten am Atemmuster erkennen
- Tippen um Übung zu Pausieren

## App builder

### Nova

https://appsumo.com/products/nowa/?clickId=xtN3MlQjpxyNW41Taiy8ZRyaUkFx00UbB14myA0&irgwc=1&utm_medium=4352386&utm_campaign=Online%20Tracking%20Link&utm_source=IR#pricePlans
https://www.nowa.dev/pricing
https://www.nowa.dev/road-map

### Andere

https://www.fluxbuilder.com/pricing
https://www.adalo.com/pricing
https://flutterflow.io/pricing
https://www.glideapps.com/pricing
https://www.stackerhq.com/pricing

https://www.blup.in/pricing

## Entfernter text

2.2
Die Kombination von HTML, CSS und JavaScript ermöglichte die Erstellung einer ansprechenden Benutzeroberfläche, interaktiver Funktionen und einer reibungslosen Benutzerführung. 

2.4.1
Dabei erhält die Funktion als Argument progressValue eine Zahl zwischen 0 und 100, die den Fortschritt in Prozent angibt. Sie prüft dann das aktuelle Farbschema der Seite (hell oder dunkel) und bestimmt die Start- und Endfarbe des Fortschrittsbalkens fest. Anschließend wird der Hintergrund des Fortschrittsbalkens auf einen konischen Farbverlauf gesetzt, der mit der Startfarbe beginnt und mit der Endfarbe endet, wobei der Fortschrittswert den Winkel des Farbverlaufs bestimmt.

, indem der Fortschrittswert über einen bestimmten Zeitraum aktualisiert wird. Diese Funktion akzeptiert ein Argument für die Dauer, die die Animation dauern soll. Sie berechnet dann die Anzahl der Schritte, die erforderlich sind, um die Animation zu beenden, basierend auf einer Intervallzeit von 10 Millisekunden. Sie initialisiert den Fortschrittswert und den aktuellen Schritt auf 0, legt dann ein Intervall fest, das den Fortschrittswert aktualisiert, und ruft die Funktion updateCircularProgress mit dem neuen Wert auf. Anschließend wird der aktuelle Schritt inkrementiert und überprüft, ob die Animation abgeschlossen ist. Ist dies der Fall, wird das Intervall gelöscht.

Eine solche URL sieht dann zum Beispiel so aus: „https://atemuebungen.vercel.app/exercise.html?practice=4-7-8_Atemtechnik“. 

3
Eine weitere sinnvolle Verbesserung könnte die Verwendung eines Backends sein: Während sich mein Projekt bisher nur auf das Frontend, also den für den Betrachter sichtbaren Teil, konzentriert hat, könnte ein Backend das Anlegen und Speichern von Benutzerkonten ermöglichen. So könnten z.B. Benutzerdaten wie benutzerdefinierte Übungen oder favorisierte Atemübungen geräteübergreifend gespeichert werden können.