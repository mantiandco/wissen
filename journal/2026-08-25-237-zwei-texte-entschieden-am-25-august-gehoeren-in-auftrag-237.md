---
datum: 2026-08-25
nummer: 237
bereich: website
typ: entscheidung
autor: archiv
archiv: 11.6
---
# Zwei Texte, entschieden am 25. August — gehören in Auftrag 237


**Noch nicht eingebaut, und zwar mit Absicht:** Auftrag 236 arbeitet zu diesem Zeitpunkt im selben Verzeichnis. Die Dateien tragen bereits `langOf()`, `t()` und die `pending`-Vermerke, committed ist aber nichts. **Wer parallel in `src/content/` schreibt, schreibt gegen einen laufenden Umbau.** Die Texte stehen deshalb hier und wandern in 237.

**`meta.json` → `zutaten.description`** — ersetzt die Dublette mit `/herstellung`:

> Was drin ist und was nicht: Zutaten, Allergene und Zusatzstoffe unserer Gerichte, offen aufgeschrieben statt auf Nachfrage.

`herstellung.description` bleibt unverändert — der Satz über minus achtzehn Grad gehört dorthin.

**`copy/home.json` → `drinks.intro`**, beide Zeilen neu:

> Eistee, Limonade und Cola in Mehrwegflaschen, 0,33 l.

> Eine Marke aus Stuttgart, das ganze Regal. Wir haben uns entschieden statt gemischt: Die Eistees treffen die Mitte zwischen Eistee-Gefühl und zu viel Zucker, die Limonaden dürfen etwas süßer sein — Limonade eben. Und die Cola muss man niemandem erklären. Weil danach gefragt wird: Bei Elephant Bay ist jede Flasche vegan.

**Drei Entscheidungen stecken darin, und alle drei sind Taibs Vorgabe „keine Fakten, die sich ändern":**

**„Vierzehn Sorten" ist gestrichen.** Eine Stückzahl als Prosa neben einer Liste, die sie erzeugt — genau das Muster, gegen das die Kontrastkommentare geprüft werden. Die Zahl steht in den Daten; im Text hat sie nichts verloren.

**„Eine Marke aus Stuttgart" bleibt — jetzt mit Beleg.** Ich hatte den Halbsatz gestrichen, weil die Angabe im Bestand nur an dieser einen Stelle stand. Am 25. August nachgeprüft: **Elephant Bay GmbH, Birkenwaldstraße 214, 70191 Stuttgart, HRB 744251, Getränke aus Stuttgart seit 2015.** Damit ist es keine übernommene Behauptung mehr, sondern eine belegte Angabe, und die Quelle steht hier, damit sie nicht ein drittes Mal geprüft werden muss.

**Die Cola ist jetzt im Text**, weil die Überschrift `colLemonade` sie längst nennt („Limonade & Cola") und der Einleitungstext nur zwei Arten kannte.

**`diet` kommt in das Getränkeschema — entschieden am 25. August.** „Bei Elephant Bay ist jede Flasche vegan" ist Taibs Auskunft. **In `drinks.json` gab es kein `diet`-Feld** — die Getränke trugen nur `id`, `kind`, `name`, `photo`, `order`. Damit stand die Zusage als Prosa da und wurde von nichts geprüft, während bei jedem Gericht `diet-check` genau dafür sorgt. Mit dem Feld trägt die Aussage sich selbst. **Gehört in Auftrag 237**, zusammen mit der Erweiterung von `diet-check` auf die Getränke.

**Ein Fund am Rande, der Taibs Vorgabe bestätigt:** Im alten Projektgedächtnis steht unter 7.10 „Exotic kommt, Cassis fliegt raus". **Die Sortenzahl ändert sich also bereits.** Ein Text mit „vierzehn Sorten" wäre am Tag des Wechsels falsch geworden, ohne dass jemand ihn angefasst hätte.

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 11.6, Zeilen 1571–1598. Datum aus dem jüngsten Commit des Auftrags in mantiandco/website.*
