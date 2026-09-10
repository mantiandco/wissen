---
datum: 2026-08-25
nummer: 240
bereich: website
typ: auftrag
autor: archiv
archiv: 11.9
---
# Auftrag 240 — gelaufen, sechs Commits, ein Fund danach


**Cassis ist raus, Exotic ist drin, vierzehn Sorten sind vierzehn geblieben.** In den Daten 7 Eistee / 5 Limonade / 2 Cola, `order` lückenlos 1 bis 14, Exotic auf Platz 11 zwischen Lime Mint und Pink Grapefruit — also genau dort, wo Cassis stand. Im gebauten HTML von `/speisekarte/` steht „Exotic" an dieser Stelle und „Cassis" nirgends. Sechs Commits für die Abschnitte 1 bis 6; Abschnitt 7 war eine Verbotsliste und bekam keinen.

### Meine Vorgabe zu `git mv` war falsch

**Der Auftrag schrieb „mit `git mv`, nicht mit `mv`" und begründete das ausführlich. `git mv` schlug fehl:** `fatal: not under version control`, rc 128. **Die Datei war nie eingecheckt** — Exotic war neu im Arbeitsbaum, und `git mv` kann nur umbenennen, was der Index kennt. Ich hatte den getrackten Zustand vorausgesetzt, ohne ihn zu prüfen, und die Begründung so ausgeschmückt, dass sie überzeugend klang.

Claude Code hat den **Zweck** der Vorgabe erfüllt statt ihres Wortlauts: über einen Zwischennamen umbenannt — `mv a tmp && mv tmp A`, weil macOS case-insensitiv ist und `mv a A` direkt nicht verlässlich greift —, dann `git add`. Belegt mit `git ls-files`, nicht mit `ls`, wie verlangt. **Das ist das richtige Verhalten und der Grund, warum Aufträge eine Abweichungsliste verlangen.**

### Ein Fund nach dem Bericht: zwei Kommentare tragen jetzt eine falsche Spanne

**Exotic misst 0,4961 und ist damit der neue Kleinstwert der vierzehn.** Die Spanne lautet heute 0,4961–0,5020; sie lautete vorher 0,4971–0,5020. **An zwei Stellen steht noch die alte:** `derive-bottles.mjs` Zeile 118 f. („Gemessene Spanne der vierzehn: 0,4971 bis 0,5020") und `bottle-axis.mjs` Zeile 46 („liegen dann nicht mehr über 0,4814–0,5039, sondern über 0,4971–0,5020").

**Drei Instanzen haben das durchgelassen.** Der Auftrag — Abschnitt 7 verbot ausdrücklich, Kommentare anzufassen, und dachte dabei nur an das Wort „vierzehn". Der Bericht — er nennt 0,4961 als neuen Kleinstwert, ohne die Folge zu ziehen. Und das Gatter `kommentar`, das mit rc 0 durchlief: **Es prüft, ob Kommentare vorhanden und formal in Ordnung sind, nicht ob eine gemessene Zahl darin noch stimmt.** Das ist keine Lücke im Gatter, sondern seine Bauart — aber sie ist jetzt benannt.

**Der Wert selbst ist unauffällig.** Abstand zur Nennmitte 0,499 beträgt 0,0029, das sind 15 % der Toleranz `RAW_TOLERANCE = 0,02`. Kein Hinweis auf einen anders gearbeiteten Freisteller: Die gemessene Flaschenbreite 0,1055 teilt Exotic mit Peach Zero, der Ausschnitt schlägt nirgends am Rahmen an. Nachmessung an den geschriebenen Dateien: Kachel −0,29 %, Scheibe −0,10 %.

### Eine dritte Maßeinheit im selben Projekt

Der Bericht nennt für Exotics größte AVIF **23,1 kB**, das Skript meldet **22,6 kB**. Beides ist derselbe Wert — der Bericht rechnet dezimal, das Skript in KiB. **Damit sind jetzt drei Zählweisen für Dateigrößen im Umlauf:** `du`-Blockbelegung, Summe der Dateilängen (beide schon in 11.3 auseinandergehalten) und KiB gegen kB. **Wer zwei Zahlen vergleicht, muss wissen, welche von dreien er vor sich hat.** Nebenbei: Exotics 360er AVIF ist mit Abstand die größte der vierzehn; das Budget-Gatter lief trotzdem grün.

### Was der Auftrag richtig vorhergesagt hat

**Die Gegenprobe zum Löschen trägt.** Nach `git rm` der zwölf Cassis-Ableitungen und einem zweiten `npm run bottles` sind sie nicht zurück: 84 Flaschen- und 84 Scheibendateien wie vorher, `git status` zeigt nur die zwölf Löschungen, und der Lauf meldet `eb-cassis` als Foto ohne Getränk. **Der Unterschied zu den 42 Scheiben aus 11.3 ist damit belegt und nicht mehr nur behauptet.**

**42 bleibt 42.** Nachgezählt am gebauten HTML, nicht übernommen. Nur ein Name in der Liste hat gewechselt: `eb-lem-cassis` → `eb-lem-exotic`. Beide Kommentarstellen sind nachgezogen.

**39 Dokumente**, wie erwartet. Astro meldet „37 page(s) built"; die Differenz sind die zwei Weiterleitungsseiten, die Astro anders zählt.

### Gatter

Elf Einzelläufe, **1819,1 s** (30 min 19 s) gegenüber 1798,1 nach 236 und 1822,0 nach 237. budget 1126,6 · contrast 236,8 · hover 196,9 · a11y 192,9 · thirdparty 64,0 · kommentar 1,0 · sprache 0,2 · teilbild 0,2 · diet-check, legal, anrede je 0,1. Die Schwankung liegt in den langen Gattern und ist Rauschen.

**`diet-check` steht weiter auf rc 1: 26 unbelegte Ernährungsangaben, 22 unbekannte Zutaten, beide unverändert.** Dieser Auftrag hat sie nicht bewegt, wie beauftragt zu prüfen war. Neu in der Ausgabe: **„Getränke: 14 von 14 mit Ernährungsangabe"** — der Teil des Gatters, der in 234 dazukam, ist grün.

### Zwei lose Enden

**`Auftrag-03-ClaudeCode.md` liegt als ungestagte Löschung im Baum**, ungefragt gemeldet. Sie stammt nicht aus diesem Auftrag: zuletzt am 15. August in `5f81ee6` angefasst, seither gelöscht, ohne dass ein Commit es nachgezogen hätte. **Passt zur Regel aus 1.4 — Aufträge gehören nicht in den Ordner —, muss aber committet werden, sonst steht sie bei jedem `git status` im Weg.**

**Die vegane Angabe für Exotic beruht weiter nicht auf einer gelesenen Zutatenliste.** Claude Code hat das sauber getrennt: Die Nährwerttabelle nennt keine tierische Zutat, aber eine Nährwerttabelle ist keine Zutatenliste. **Das Foto der Zutatenliste steht weiter aus, bei allen vierzehn Sorten.**

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.9, Zeilen 1685–1726. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
