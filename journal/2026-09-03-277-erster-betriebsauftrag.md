---
datum: 2026-09-03
nummer: 277
bereich: website
typ: auftrag
autor: archiv
archiv: 11.50
---
# Auftrag 277 — erster Betriebsauftrag


**Gelandet, vier Commits (e232424 → ef310d9), Push 12:29, live nach 73 s** (Mischzustand beim Ausrollen bis 117 s — normal). Zwölf Gatter: `pending` gebündelt (AUFRUF-Regex verträgt jetzt Klammern, Zeilenumbrüche, Helfer; Gegenzählung 6 = 6, MUSTER_EN über Einrückungs-Stapel). kommentar-Decke **187 → 167**: 20 Prosa-Duplikate von @kontrast-Annotationen entfernt (die Abschrift im Satz veraltet still, die Annotation rechnet das Gatter nach). Wörterbuch-Klassen kleingeschrieben. `.claude/launch.json` war Claude Codes eigene Dev-Server-Konfig aus 276 — Vorschlag: löschen, `.claude/` in .gitignore (278). Das Gedächtnis war fremdfrei; Claude Codes „Gedächtnis-Einträge“ liegen in seinem Auto-Gedächtnis unter ~/.claude/projects/…/memory/, nie in unserer Datei. Meine Kennung „8726e9b7“ war ein SHA-Präfix, kein Commit — Claude Code suchte danach; künftig „Prüfsumme beginnt mit“ statt „Fassung“.

**Die 24 roten diet-Angaben, aufgeschlüsselt (Tabelle im 277-Bericht):** Das Gatter liest den Klassenkopf vor der Klammer („Säuerungsmittel (…)“), und Klassen wurden in 234 absichtlich aus dem Verzeichnis genommen, weil eine Klasse nichts über Herkunft sagt — die Klammer engt ein, begründet aber nie. Ergebnis: **~19 der 24 sind Verzeichnisentscheidungen** (Kaliumsorbat, Calciumchlorid, Dinatriumdiphosphat, Natriumcarbonat, Paprikaextrakt, Guarkernmehl, Natriumcitrate, Natriumalginat, Citronensäure mit C, modifizierte Stärke, Kräuter, Gewürzextrakte, Schokolade mit Unterzutaten … — Herkunft nicht offen, nur der Eintrag fehlt), **3 echte Herstellerfragen: Speisewürze (Kartoffelsalat — Eiweißhydrolysat pflanzlich oder tierisch), E471 in der Margarine und „natürliches Aroma“ (beide Cheesecake)**, dazu bedingt Xanthan (Pommes, Süßkartoffel-Pommes, Cheesecake — Nährmedium). **Für Taib heißt das vier Produkt-Anfragen:** Kartoffelsalat-Lieferant (Speisewürze), Cheesecake-Lieferant (Margarine-E471, Aroma), Pommes-Lieferanten (Xanthan) — jeweils: „Ist das Produkt vegan/vegetarisch? Herstellererklärung.“ Die 19 setzt 278 als Verzeichnisentscheidungen mit Begründung je Stoff.

**Erster Live-Tag, gemessen:** kein HSTS (`strict-transport-security` fehlt — im Dashboard einschaltbar, Taib) · **Soft-404: unbekannter Pfad liefert 200** — eine 404-Seite fehlt (Pages nutzt `404.html`, auch je Verzeichnis für /en/) → 278 · `http://` braucht zwei Sprünge (Always-Use-HTTPS vor der Root→www-Regel) — hinnehmbar · Köpfe: nosniff, referrer-policy, kein x-robots-tag, cache-control max-age=0 für HTML (DYNAMIC), Assets gehasht · robots.txt live = eigene Datei, Cloudflare-Block weg, sitemap-index 200 · pages.dev weiter 200 ohne noindex (Canonical deckt) · Kanontafel `additiveClasses` en groß mitten im Satz („today Preservatives, Acids …“) → 278 klein. **Farben:** Taib erwog graueres Dunkel und beigeres Hell — Entscheidung 3. September: bleibt (#20201f / #f6f4ec); Begründung: Logo klein, auf Fotos und im Druck braucht das Fast-Schwarz, Grau frisst dem Rot die Bühne, Grau auf Beige kippt ins Kartonhafte.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.50, Zeilen 2432–2440. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
