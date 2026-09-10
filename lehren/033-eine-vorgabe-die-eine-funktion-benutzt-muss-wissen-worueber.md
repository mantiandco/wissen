---
archiv: 17
quelle: PROJEKTGEDAECHTNIS-2026-09-11.md
---
# Eine Vorgabe, die eine Funktion benutzt, muss wissen, worüber die Funktion zählt

**Eine Vorgabe, die eine Funktion benutzt, muss wissen, worüber die Funktion zählt.** Ich habe angewiesen, `splitParts()` je Punkt aufzurufen. Die Funktion prüft jede Wendung gegen alles, was sie bekommt, und wirft bei null Treffern — **ihre Regel gilt für den Abschnitt, nicht für seine Glieder.** Vier Verweise auf vier Punkten hätten den Bau angehalten. Der Fehler ist derselbe wie beim `git mv`: eine ausführlich begründete Anweisung über einen Aufrufweg, den ich nicht gelesen hatte.
