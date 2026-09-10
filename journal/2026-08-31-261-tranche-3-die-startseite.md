---
datum: 2026-08-31
nummer: 261
bereich: website
typ: auftrag
autor: archiv
archiv: 11.32
---
# Auftrag 261 — Tranche 3, die Startseite


**Gelandet, sechs Commits, zehn grün.** Sechs deutsche Berichtigungen (H1 „Manti aus eigener Produktion", der Doppelsatz zu „Warum anders" aus dem Hero gestrichen, „Lieferung **in** Mannheim" statt „nach", der Anker in Hausform, `footer.nav` „Alle Seiten", Untergrenzen im Proof), 83 englische Felder. `budget` 41 / 0 — vorab so festgehalten, weil `footer.nav` ein `aria-label` auf jeder Seite ist.

**Untergrenzen mit Wächter (Taibs Weg A):** `site.ts` rundet die Zähler ab — ab 200 auf volle Hundert, darunter auf volle Zehn: 580 → „über 500", 57 → „über 50". Die Werte bleiben, datiert mit `reviewsCheckedAt`; **`legal` wird rot, wenn das Datum älter als 90 Tage ist**, und nennt beim Fallen beide Zählerstände. Gegenprobe gefahren. Die 90 Tage sind eine Pflegefrist, von mir vorgeschlagen, als Konstante mit Kommentar.

**Öffnungszeiten als Sprachzweig:** die Beschriftungen der `openingHours` sind `Localized` (Mo–Fr / Mon–Fri); Band, Tabelle und Schema leiten daraus ab. **Der Ruhetag-Satz wird ausgewählt, nicht geschrieben:** sieben Tage belegt → der Satz, sonst eine offene Hülle für den Ruhetag. Eine Tabelle, die still einen Tag verliert, kann nicht mehr „kein Ruhetag" behaupten.

**Die Paritätsstufe in `sprache`** vergleicht die Platzhaltermengen beidseitig geschriebener Schlüssel: 124 verglichen, null rot, genau eine Warnung — `order.body`, `{streetDative}` gegen `{street}`, die eine erlaubte grammatische Abweichung. Ein weggelassener Platzhalter war vorher stumm (260a). **Die Node-Vorprüfung** ist erste Stufe von `npm run build`, wörtlich gegen `.nvmrc`, in Sprache, die auch ein altes Node ausführt.

**Die Stimmen** tragen je eine Sprachangabe; der Vermerk „Translated from German." erscheint nur, wenn Zitatsprache und Seitensprache auseinanderfallen — abgeleitet, kein Teil des Zitats. Nebenwirkung, gemeldet: die deutsche Seite dieser Hülle steht als dauerhaft offene pending-Stelle und taucht bei jedem `npm run pending` auf — das Feld gehört je Sprache optional, nicht ewig ausstehend.

**Meine Fehler:** §7b hat Werte vorhergesagt, `sprache` zählt Hüllen — 255 hatte das gezeigt, ich habe es wieder in der falschen Einheit geschrieben; umgerechnet (713 · 705/8 · 125/588) exakt getroffen. §5 nannte die Mechanik nicht, die ein Vermerk braucht (Seitensprache bis in die Stimmen durchreichen). §6 kollidierte mit der Tabellenregel von `pending.mjs`.

**Gemeldet, nicht geändert:** **„Mannheim" steht an acht Stellen als Literal**, obwohl `{city}` existiert — Straße und Zeiten laufen über Slots, der Stadtname nicht; zwei der acht aus meinem Diktat. Bei der Franchise-Absicht ist der Hero, der „Mannheim" fest sagt, die Zeile, die ein zweiter Standort nicht erben kann. Die H1 divergiert absichtlich (de Produktion, en Brücke — Abschnitt 15). `pending.mjs` hat fünf alte Lücken und endet mit exit 1, vor wie nach 261 — kein Gatter. **Zu klären:** Der Bericht schreibt den Ruhetag-Satz als „kein Ruhetag", im Bestand stand „ohne Ruhetag" — Tippfehler oder Wortwechsel ohne Diktat.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.32, Zeilen 2208–2224. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
