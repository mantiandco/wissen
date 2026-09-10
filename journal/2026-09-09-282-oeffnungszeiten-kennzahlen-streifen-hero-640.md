---
datum: 2026-09-09
nummer: 282
bereich: website
typ: auftrag
autor: archiv
archiv: 11.55
---
# Auftrag 282 — Öffnungszeiten, Kennzahlen-Streifen, Hero 640


**Gelandet, fünf Commits (f4b5a59 → 4aa3075), live nach 62 s.** **Zeiten:** ein Band Mo–So 11:00–21:00 in `site.ts`; vorher stand „10:30“ in 84 Dokumenten (JSON-LD im Kopf jeder Seite), nachher 0× alte Zeiten, 86× 11:00/21:00. Ausgaben: Startseite „Mo–So 11:00–21:00“ / „Mon–Sun 11:00–21:00“, Hinweissatz „Montag bis Sonntag, ohne Ruhetag.“ / „Monday to Sunday, no closing day.“, Bestellabschnitt „Mo–So ab 11:00“, JSON-LD eine OpeningHoursSpecification mit sieben dayOfWeek. Die Fußzeile trägt keine Zeiten; `hoursNote.ruhetag` bleibt in beiden Sprachen pending by design (Ruhetag-Fall). **Streifen:** Proof.astro, Copy-Block `home.proof` (4 Schlüssel), site.ts `ratings/reviewsCheckedAt/countFloor/ratingFloors`, legal-Stufe Bewertungsfrist, i18n-Eintrag, anrede 53 → 52 — alles weg, 0 Restfundstellen; `menu().counts`, `hoursBand/hoursPhrase`, Voices bleiben. **AggregateRating war nie im JSON-LD** — Schema.astro schließt Plattform-Bewertungen bewusst aus. Screenshots: Seitenhöhe −107 px (1280) / −142/−167 (390), Bestseller rückt sauber auf. **Hero 640er:** 414/430 px DPR 2 laden 94,9 kB statt 126,4 (über heroMobil 90, aber ungemessen — Gatter misst bei 390). sprache 833 (proof-Hülle weg). Meine §1-Fehler: Fußzeile ohne Zeiten, Standortseite zeigte Tage statt Bänder, ruhetag-Hülle war nie zu schließen.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.55, Zeilen 2469–2472. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
