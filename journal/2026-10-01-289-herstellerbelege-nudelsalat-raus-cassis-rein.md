---
datum: 2026-10-01
nummer: 289
bereich: kennzeichnung
typ: auftrag
autor: claude-code
betrifft: [diet-check, herstellererklaerung, metro, nudelsalat, cassis, halal, redirects, foodamigos]
---
# Auftrag 289 — Herstellerbelege, Nudelsalat raus, Cassis rein

**Belege:** Drei METRO-Artikelspezifikationen vom 22.09.2026 liegen unter `unterlagen/metro/` (Käsekuchen = Cheesecake, Gâteaux au chocolat = Schoko-Soufflé, Kartoffelsalat), je mit Begleitdatei; die Ankreuzfelder sind Grafik und wurden am gerenderten Bild gelesen. Sie erklären Cheesecake und Soufflé für vegetarisch, den Kartoffelsalat für vegan — und alle drei für „Halal: Nein“. Das diet-Gatter kennt seit diesem Auftrag das Feld `herstellererklaerung` (art, quelle): Sie belegt die unbekannten Stoffe genau dieses Gerichts, wenn sie den Chip deckt; ein bekannter Widerspruch bleibt ein Widerspruch. Gegenproben: „vegetarisch“ an einem vegan-Chip fällt, eine Erklärung ohne Quelle fällt (am Bau schon). **diet-check 6 → 2, wie vorab abgeleitet** — offen ist nur noch Xanthan in Pommes frites und Süßkartoffel-Pommes. Die Zutatenlisten der drei Gerichte stehen auf dem Wortlaut der Spezifikation (Mengenanteile, „ungehärtetes Kopraöl“ statt „Kokosöl“), Wörterbuch im selben Commit.

**Nudelsalat:** entfernt am 1. Oktober 2026, Taibs Entscheidung — Gericht, Bilder aller Stufen, sieben nur von ihm genutzte Wörterbucheinträge; keine Spezifikation archiviert. Die alten Adressen /speisekarte/nudelsalat/ und /en/menu/nudelsalat/ antworten mit 301 auf die Speisekarte ihrer Sprache. Dabei gefunden: Pages lieferte unter jeder Altadresse mit Schrägstrich (auch /standort/, /wissen/) den Stumpf mit 200 aus; `_redirects` nennt seither beide Formen. /vegetarisch/ sagt „in einem der Salate“ (aus den Daten: nur der Griechische Salat ist unter den Salaten nicht vegan).

**Cassis** ist zurück (Platz 13, Getränke 15): Kennzeichnung vom Flaschenetikett (Foto Taib, `unterlagen/etiketten/`), **nicht von onlinedurst.de** — der Händler führt unter Cassis die Lime-Mint-Liste, die Ursache der Kopierfehler vom September. Das Bild kam aus der vorhandenen Quelle `eb-cassis.png`; der alte Datensatz (entfernt in 3529d79, Auftrag 240) trug nur Name, Bildname und Platz 11, keinen Preis.

**Foodamigos:** Die Korrespondenz ist abgeschlossen (`unterlagen/foodamigos-antwort-2026-09.md`); B1 noindex bleibt bei Foodamigos in Prüfung.

**Gemessen:** Gatterlauf FAIL nur diet 2, zwölf grün; sprache 825 Schlüssel, 186 Kennzeichnungsfelder, 246 Wörterbucheinträge — alle wie vorhergesagt. Live nach dem Push: die drei Gerichtseiten mit Spezifikationswortlaut, /vegetarisch/, Cassis auf beiden Speisekarten, 301 aller Altadressen nach 85 s.

## Offen
- Xanthan in Pommes frites und Süßkartoffel-Pommes: Herstellerauskunft oder -erklärung fehlt — dann diet-check grün.
- Halal und das Sortiment: Die Spezifikationen von Cheesecake, Schoko-Soufflé und Kartoffelsalat sagen „Halal: Nein“. Die Website behauptet für diese Gerichte nichts dergleichen; der Grundsatz im Wissen („Was nicht halal ist, kommt nicht auf die Karte“, Archiv 15) widerspricht dem Sortiment aber — Taibs Entscheidung, ob „Nein“ hier „nicht zertifiziert“ heißt und was das für den Grundsatz bedeutet. Dazu: `HalalDiet` im JSON-LD der vier Fleischgerichte gilt für das ganze Gericht, auch für die wählbare Pesto-Rosso-Sauce mit Grana Padano (tierisches Lab).
- Nährwerte aus den Spezifikationen: nicht übernommen, Entscheidung offen.
