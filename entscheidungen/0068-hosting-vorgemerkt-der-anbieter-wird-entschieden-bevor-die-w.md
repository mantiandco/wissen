---
status: gilt
archiv: 15 / Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen
zeile: 2971
---
# Hosting, vorgemerkt — der Anbieter wird entschieden, bevor die Weiterleitungen gebaut werden

## Kontext

Kein eigenes Datum; steht im Bibliotheken-Abschnitt vom 31. August. Der Anbieter wurde am 2. September entschieden (Cloudflare Pages, Zeile 3338), `_redirects` passt zum Format.

## Entscheidung

**Hosting, vorgemerkt:** Die Seite ist am Ende nur `dist/`. Lädt der Anbieter die Dateien aus, braucht er kein Node; baut er aus dem Repository, liest er `.nvmrc` und `engines`. Im Bau liegt `_redirects` — das Format von Netlify und Cloudflare Pages; ein anderer Anbieter (Apache, nginx, klassischer Webspace) braucht die Weiterleitungskarte in seinem Format. **Der Anbieter wird entschieden, bevor die Weiterleitungen gebaut werden.**

## Begründung

(in der Entscheidung enthalten)

## Status

gilt · Datum: im Archiv nicht genannt

*Aus dem Archiv: PROJEKTGEDAECHTNIS-2026-09-11.md, Abschnitt 15 / Bibliotheken: festgeschrieben, absichtlich aktualisiert, eins nach dem anderen, ab Zeile 2971.*
