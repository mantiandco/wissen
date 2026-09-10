# infrastruktur

Domain mantiandco.com (Zone bei Cloudflare in Taibs Konto, Registrierung IONOS), Website auf Cloudflare Pages aus mantiandco/website, Shop-Subdomain bestellen.* bei Foodamigos (TLS dort), Mail siehe Archiv 13.6; keine Geheimnisse hier.

*Wörtlich aus PROJEKTGEDAECHTNIS-2026-09-11.md; Abschnittsnummern beziehen sich darauf.*

## Archiv 13.6 — Die Mail — Stand


**Gesendet am 22./23. August**, ohne Anlagen. Begründung für den Verzicht auf Anlagen: Die Entwürfe hängen an denselben Antworten, die die Mail einholt, und sind noch nicht anwaltlich geprüft.

**A — Rechtliches:** A1 Vertragspartner · A2 Art. 26/28 · A3 Ersetzung der Rechtstexte, fünf Fragen einschließlich **A3.5 Verlinkung statt Hinterlegung** · A4 Mängel im Einzelnen mit dem Vorlagen-Befund

**B — Technisch:** B1 `noindex, follow` · B2 Pfadtausch und `www` · B3 `maximum-scale=1`

**C — Daten:** C1 Kundendaten · C3 Speicherdauer · C4 Zahlungsdienstleister · C5 Cookie-Liste · C6 automatisierte Entscheidungen · C7 Prozentsatz der Servicegebühr

**Erledigt und vor dem Versand entfernt:** B4 Allergene je Option (geht im Backend) · B5 abwählbare Beilagen (über das Kommentarfeld) · B6 Falschaussagen (durch die neuen Shop-Texte behoben) · B7 Rabattdarstellung (Taib überarbeitet) · B8/B9 Pfand und Grundpreis (werden bereits ausgewiesen) · C2 Bestsellerzahlen (Taib kennt den Weg) · Öffnungszeiten (selbst korrigiert)

**Datei:** `Mail-an-Foodamigos.md`.

## Archiv 13.7 — `www` — Entscheidung


**Die Bestellstrecke läuft durchgehend auf `www.mantiandco.com`.** Entscheidung: Die Unternehmensseite läuft ebenfalls auf `www`, `mantiandco.com` leitet dauerhaft dorthin. Für das Hosting: 301-Weiterleitung von der Fassung ohne `www`, `www` als kanonische Adresse in allen Verweisen.

**Archiv 15** (Die Bestellstrecke zieht auf bestellen.mantiandco.com):

**DNS und Domain:** Die Zone von `mantiandco.com` liegt bei IONOS **in Taibs Konto**; Foodamigos hat Zugangsdaten und legt Einträge dort selbst an (so auch die Subdomain), das TLS-Zertifikat stellt Foodamigos. Der www-Eintrag ist Taibs Sache. **Niemand fragt diese Dinge erneut ab.**

**Archiv 18.1** (Hosting, Stand 2. September):

1. **Hoster-Auswahl mit Taib** — Stand 2. September, mit der ganzen Vorgeschichte, damit sie nie wieder verlorengeht:

**Archiv 18.1** (Hosting — Historie):

**Historie:** Phase 1 empfahl Cloudflare doppelt — als Zwischenschicht fürs Pfad-Routing („der Hoster wird austauschbar“) und **Cloudflare Pages** als Hosting; die Empfehlung steht bis heute in der Umbau-Roadmap. Phase 2 relativierte: US-Unternehmen, Art.-28-Vertrag, Drittlandgrundlage, längere Datenschutzerklärung — „europäische Alternative wäre einfacher“. **Seit der Subdomain-Entscheidung ist das Routing-Argument weggefallen** — die Hauptdomain trägt nur noch statische Dateien.

**Archiv 18.1** (Hosting — Gewichtung):

**Taibs Gewichtung (2. September): Komfort und Konzerngedanke schlagen den Einmal-Text der Datenschutzerklärung** — meine IONOS-Neigung war falsch gewichtet; IONOS gefällt Taib generell nicht (alles separat, am Ende Profipreis). GoDaddy ausgeschieden (US-Preis ohne Cloudflare-Gegenwert, Upsell). Hostinger: EU, tauglich, aber seine Stärke ist der spätere VPS — und **Architektur-Grundsatz, entschieden: öffentliche Website und interner Datei-Server gehören nie auf dieselbe Maschine**; der Server für zentrale Dateien und Backups ist eine eigene, spätere Entscheidung und wählt nicht den Website-Hoster.

**Archiv 18.1** (Hosting — Entscheidung und Stand):

**Neigung damit: Cloudflare Pages** — Push-Deploy löst git-Remote, Repo-Backup und automatischen Bau in einem, kostenlos, Franchise-skalierend. Der eine Arbeitsschritt: Nameserver-Umzug der Zone zu Cloudflare (bleibt Taibs Konto), `bestellen`-Eintrag als reiner DNS-Eintrag übernehmen (Foodamigos-TLS läuft weiter), Foodamigos informieren (ihr IONOS-DNS-Zugang wird hinfällig); die Domain-Registrierung kann bei IONOS bleiben. **Entschieden (Taib, 2. September): Cloudflare Pages — „besser für den Start“.** Stand abends: ⑴ Konten ✓ · ⑶ Nameserver-Umzug ✓ (Zone aktiv; Proben offen; Foodamigos noch nicht informiert, dass ihr IONOS-DNS-Zugang hinfällig ist) · ⑵ Push ✓ (273) · ⑷ **Pages-Projekt — davor 274: Frischklon-Bautest** (Pages klont und baut; `.gitignore` führt `src/assets/plates/` — der Bau aus dem Klon muss byteidentisch zum Hauptbaum sein, sonst wiederholt sich die Schriften-Lücke), dann die Pages-Einstellungen aus dem Bericht (Build-Befehl, Ausgabeordner, Node-Version), Taib verbindet GitHub in der Cloudflare-Oberfläche, erster Bau, Vorschau-URL, Vergleich Vorschau gegen lokales dist · ⑸ Datenschutz-Absatz mit Cloudflare (Art. 28, DPF). Der Livegang selbst bleibt Taibs www-Umstellung nach der Testbestellung.
