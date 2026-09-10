---
archiv: 17
quelle: PROJEKTGEDAECHTNIS-2026-09-11.md
---
# Eine Gegenprobe wird mit der Kopie zurückgenommen, nicht mit `git checkout`

**Eine Gegenprobe wird mit der Kopie zurückgenommen, nicht mit `git checkout`.** In 245 hat Claude Code nach einer absichtlich herbeigeführten Fehlmessung `git checkout -- Menu.astro` gerufen und damit seine eigenen, noch nicht committeten Änderungen desselben Auftrags vernichtet. **HEAD enthält nicht, was noch nicht committet ist.** Wer einen Zustand herstellt, um ihn zu widerlegen, sichert die Datei vorher nach `/tmp` und kopiert sie zurück. „Zustand wiederherstellen" heißt nicht „auf HEAD zurückwerfen".
