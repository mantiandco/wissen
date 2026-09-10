---
datum: 2026-08-31
nummer: 262
zusatz: a
bereich: website
typ: auftrag
autor: archiv
archiv: 11.34
---
# Nachtrag 262a — die Zurück-Geste


**Taibs Befund am 31. August:** Der Zwei-Finger-Wisch nach rechts (macOS, zurück in der Chronik) ging auf der Seite nicht — auch im normalen Fenster, auf einer Unterseite, über Text. Damit blieben von vier möglichen Ursachen (Prüfmodus, leere Chronik, Wisch über einer Reihe, seitenweite CSS-Unterdrückung) nur die vierte.

**Gemessen:** `html { overscroll-behavior: none }` in `base.css:35` — **die Kurzschrift unterdrückt beide Achsen.** Der Kommentar darüber begründete nur die senkrechte: Überziehen am Dokumentende zeigte die Zeichenfläche, eine Farbe für zwei Enden. Die waagerechte Unterdrückung war nie Absicht, nur Beifang. Beide Reihen (`ul.best`, `ul.voices`) trugen `overscroll-behavior-x: contain` längst — richtig so: eine Reihe an ihrem linken Rand darf nicht in die Chronik durchreichen.

**Geändert (`3d9d2e1`, eine Datei):** `overscroll-behavior: none` → `overscroll-behavior-y: none`, Kommentar berichtigt und um den Absichtsvermerk ergänzt (die Geste gehört dem Browser; wer die Kurzschrift zurücksetzt, wirft wischende Gäste aus der Seite). Berechnete Werte danach: `html`/`body` auto, beide Reihen contain. `budget` 41 / 0, weil `base.css` jedes Dokument ändert. **Taibs Abnahme am Trackpad: „funktioniert wunderbar."**

**Mein Auftrag war unpräzise:** „x-Unterdrückung entfernen" hätte, wörtlich auf die Deklaration angewandt, die dokumentierte y-Wirkung mit aufgerissen — der Nachtrag hatte die Kurzschrift-Form nicht vorhergesehen; das §3-Sollbild hat ihn richtig geleitet. **Gemeldet, nicht geändert:** `.best` trägt sein `contain` unkommentiert, `.voices` mit Kommentar — der Schutzkommentar für `.best` kommt mit dem Sammel-Nachtrag.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.34, Zeilen 2242–2251. Datum aus dem Text.*
