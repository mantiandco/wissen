---
archiv: 17
quelle: PROJEKTGEDAECHTNIS-2026-09-11.md
---
# Eine Vorgabe, die einen Zustand voraussetzt, muss den Zustand prüfen

**Eine Vorgabe, die einen Zustand voraussetzt, muss den Zustand prüfen.** Auftrag 240 schrieb „mit `git mv`, nicht mit `mv`" und begründete es über zwei Absätze. `git mv` scheiterte, weil die Datei nie eingecheckt war — ein neu abgelegtes Foto ist im Arbeitsbaum und nicht im Index. **Die Begründung war so ausführlich, dass sie die ungeprüfte Annahme darunter verdeckt hat.** Je überzeugender eine Anweisung klingt, desto eher wird ihre Voraussetzung nicht mehr nachgesehen.
