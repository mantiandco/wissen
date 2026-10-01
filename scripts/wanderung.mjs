/* Die Wanderung (Auftrag 287 §8): aus der eingefrorenen Gedächtnis-Datei der
 * Website das Journal, die Lehren, die Bereiche, VISION und REGELN — per
 * Skript, mit Zählung, wörtlich. Was das Skript nicht sauber zuordnen kann,
 * bleibt im Archiv und steht in der Restliste (archiv/Restliste-…md).
 *
 * Aufruf: node scripts/wanderung.mjs [quelle.md] [website-repositorium]
 *   quelle: die Gedächtnis-Datei (heute die Archivkopie); website-repositorium: der
 *   Klon von mantiandco/website, aus dessen Commits die Landungsdaten kommen und
 *   dessen docs/ die Restliste mitliest.
 * Die Entscheidungen (entscheidungen/) kommen aus scripts/entscheidungen.json,
 * wenn die Datei vorliegt — die Datensätze wurden in 287 mit Beleg aus den
 * Abschnitten 15, 4 und den „entschieden“-Sätzen gezogen und hier gegen den
 * Wortlaut der Quelle geprüft: ein Zitat, das nicht wörtlich in der Quelle
 * steht, wird nicht geschrieben, sondern gemeldet.
 *
 * Wiederholbar: das Skript schreibt nur seine eigenen Dateien (autor archiv)
 * und überschreibt sie; fremde Einträge fasst es nicht an. */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join, dirname, resolve } from 'node:path';
import { slug, kopf } from './schema.mjs';

const QUELLE = resolve(process.argv[2] ?? '../site-light/PROJEKTGEDAECHTNIS.md');
const REPO = resolve(process.argv[3] ?? dirname(QUELLE));
const ROOT = resolve('.');
const ARCHIVNAME = 'PROJEKTGEDAECHTNIS-2026-09-11.md';
const DOCS = join(REPO, 'docs');

/* Einmalig (Auftrag 287). Seit Bereichsdateien über Einträge geändert werden
   (ab 288), würde ein zweiter Lauf diese Änderungen überschreiben — deshalb
   hält das Skript an, sobald ein Eintrag mit autor ≠ archiv eine Bereichsdatei
   betrifft, außer mit --erneut. */
if (!process.argv.includes('--erneut') && existsSync(join(ROOT, 'journal')) && readdirSync(join(ROOT, 'journal')).some((f) => !/^autor: archiv$/m.test(readFileSync(join(ROOT, 'journal', f), 'utf8')) && /^nummer: (\d+)$/m.test(readFileSync(join(ROOT, 'journal', f), 'utf8')) && Number(readFileSync(join(ROOT, 'journal', f), 'utf8').match(/^nummer: (\d+)$/m)[1]) >= 288)) {
  console.log('Die Wanderung ist gelaufen (287); seither ändern Einträge die Bereichsdateien. Ein erneuter Lauf überschriebe sie — nur mit --erneut.');
  process.exit(1);
}
const text = readFileSync(QUELLE, 'utf8');
const md5 = createHash('md5').update(text).digest('hex');
const zeilen = text.split('\n');
console.log(`Quelle ${QUELLE}: ${zeilen.length} Zeilen, md5 ${md5}`);

/* ── Gliederung ──────────────────────────────────────────────────────────── */
const abschnitte = []; // { ebene:1|2, nr:'11.5', titel, von, bis } — Zeilen 0-basiert, bis exklusiv
for (let i = 0; i < zeilen.length; i++) {
  const h1 = zeilen[i].match(/^# (\d+)\. (.+)$/);
  const h2 = zeilen[i].match(/^## (\d+\.\d+[a-z]?) (.+)$/);
  if (h1) abschnitte.push({ ebene: 1, nr: h1[1], titel: h1[2].trim(), von: i });
  else if (h2) abschnitte.push({ ebene: 2, nr: h2[1], titel: h2[2].trim(), von: i });
}
for (let k = 0; k < abschnitte.length; k++) {
  const naechsteGleichOderHoeher = abschnitte.slice(k + 1).find((a) => a.ebene <= abschnitte[k].ebene);
  abschnitte[k].bis = naechsteGleichOderHoeher ? naechsteGleichOderHoeher.von : zeilen.length;
}
const ab = (nr) => abschnitte.find((a) => a.nr === nr);
const koerper = (a) => zeilen.slice(a.von + 1, a.bis).join('\n').replace(/\n+---\n*$/, '\n').replace(/\s+$/, '') + '\n';
const kopfEnde = abschnitte[0].von; // Zeilen vor "# 1."

/* ── a) Archiv ───────────────────────────────────────────────────────────── */
mkdirSync(join(ROOT, 'archiv'), { recursive: true });
writeFileSync(join(ROOT, 'archiv', ARCHIVNAME), text);
console.log(`a) archiv/${ARCHIVNAME}: ${Buffer.byteLength(text)} Bytes, wörtlich (md5 ${md5}).`);

/* ── b) Journal aus 11.x ─────────────────────────────────────────────────── */
const MONATE = { Juli: '07', August: '08', September: '09', Oktober: '10' };
const datumImText = (s) => {
  const m = s.match(/\b(\d{1,2})\. (Juli|August|September|Oktober)(?: 2026)?\b/);
  return m ? `2026-${MONATE[m[2]]}-${String(m[1]).padStart(2, '0')}` : null;
};
const commitDatum = (ueberschriftZeile) => {
  try {
    const out = execFileSync('git', ['-C', REPO, 'log', '--date=short', '--format=%ad', '-S', ueberschriftZeile, '--', 'PROJEKTGEDAECHTNIS.md'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    return out.at(-1) ?? null;
  } catch {
    return null;
  }
};
const landungsDatum = (nummer, zusatz) => {
  try {
    const out = execFileSync('git', ['-C', REPO, 'log', '--date=short', '--format=%ad', `--grep=^auftrag-${nummer}${zusatz}(`, '--', '.'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
    return out[0] ?? null;
  } catch {
    return null;
  }
};
mkdirSync(join(ROOT, 'journal'), { recursive: true });
for (const alt of readdirSync(join(ROOT, 'journal'))) {
  const t = readFileSync(join(ROOT, 'journal', alt), 'utf8');
  if (/^autor: archiv$/m.test(t)) unlinkSync(join(ROOT, 'journal', alt));
}
const elf = abschnitte.filter((a) => a.ebene === 2 && a.nr.startsWith('11.'));
let letzteNummer = null;
const zaehl = { landung: 0, text: 0, commit: 0, auftrag: 0, befund: 0, entscheidung: 0 };
const journalDateien = [];
for (const a of elf) {
  const t = a.titel;
  let nummer = null, zusatz = '', typ = 'auftrag';
  let m;
  if ((m = t.match(/^Auftr[äa]ge? (\d{3})(?:\/(\d{3}))?/))) nummer = Number(m[1]);
  else if ((m = t.match(/^Nachtrag (\d{3})([a-z])/))) { nummer = Number(m[1]); zusatz = m[2]; }
  else if ((m = t.match(/^Auszug (\d{3})([a-z])/))) { nummer = Number(m[1]); zusatz = m[2]; }
  else if ((m = t.match(/Auftrag (\d{3})/))) { nummer = Number(m[1]); typ = /entschieden/i.test(t) ? 'entscheidung' : 'befund'; }
  else { nummer = letzteNummer; typ = 'befund'; }
  if (/Auftragstext|Zwischenstand|Beweis dazu/i.test(t)) typ = 'befund';
  if (nummer === null) throw new Error(`11.${a.nr}: keine Nummer ableitbar`);
  letzteNummer = nummer;
  const ueberschrift = zeilen[a.von];
  const body = koerper(a);
  /* Datum, in dieser Reihenfolge: der Landungs-Commit des Auftrags in der
     Website (auftrag-NNN(k) …, der jüngste), sonst ein Datum im Text, sonst
     der Commit, der den Abschnitt anlegte — 11.1 bis 11.36 kamen in einem
     einzigen Commit (263) ins Repositorium, ihr Abschnitts-Commit sagt also
     nichts über den Auftrag. */
  let datum = landungsDatum(nummer, zusatz);
  let quelle = 'Landungs-Commit';
  if (!datum) { datum = datumImText(t) ?? datumImText(body.slice(0, 300)); quelle = 'Text'; }
  if (!datum) { datum = commitDatum(ueberschrift); quelle = 'Abschnitts-Commit'; }
  if (!datum) throw new Error(`11.${a.nr}: kein Datum`);
  zaehl[quelle === 'Landungs-Commit' ? 'landung' : quelle === 'Text' ? 'text' : 'commit'] += 1;
  zaehl[typ] += 1;
  const s = slug(t.replace(/^(Auftr[äa]ge? \d{3}(?:\/\d{3})?|Nachtrag \d{3}[a-z]|Auszug \d{3}[a-z]) — /, '')) || `abschnitt-${a.nr.replace('.', '-')}`;
  const name = `${datum}-${String(nummer).padStart(3, '0')}${zusatz}-${s}.md`;
  const inhalt = `---\ndatum: ${datum}\nnummer: ${nummer}\n${zusatz ? `zusatz: ${zusatz}\n` : ''}bereich: website\ntyp: ${typ}\nautor: archiv\narchiv: ${a.nr}\n---\n# ${t}\n\n${body}\n*Aus dem Archiv: ${ARCHIVNAME}, Abschnitt ${a.nr}, Zeilen ${a.von + 1}–${a.bis}. Datum aus ${quelle === 'Landungs-Commit' ? 'dem jüngsten Commit des Auftrags in mantiandco/website' : quelle === 'Text' ? 'dem Text' : 'dem Commit, der den Abschnitt anlegte'}.*\n`;
  writeFileSync(join(ROOT, 'journal', name), inhalt);
  journalDateien.push({ nr: a.nr, name, typ, datum, quelle });
}
console.log(`b) journal/: ${journalDateien.length} Einträge aus ${elf.length} Abschnitten 11.x (Soll 11.1–11.57 plus 11.7a, 11.11a = 59); Datum aus Landungs-Commit ${zaehl.landung}, aus Text ${zaehl.text}, aus Abschnitts-Commit ${zaehl.commit}; typ auftrag ${zaehl.auftrag}, befund ${zaehl.befund}, entscheidung ${zaehl.entscheidung}.`);

/* ── d) Lehren aus 17 ────────────────────────────────────────────────────── */
mkdirSync(join(ROOT, 'lehren'), { recursive: true });
for (const alt of readdirSync(join(ROOT, 'lehren'))) unlinkSync(join(ROOT, 'lehren', alt));
const a17 = ab('17');
const absaetze17 = koerper(a17).split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
let n = 0;
const lehrenRest = [];
for (const p of absaetze17) {
  const lead = p.match(/^\*\*(.+?)\*\*/);
  if (!lead || p.startsWith('---')) { lehrenRest.push(p); continue; }
  n += 1;
  const titel = lead[1].replace(/[.:]$/, '');
  writeFileSync(join(ROOT, 'lehren', `${String(n).padStart(3, '0')}-${slug(titel)}.md`), `---\narchiv: 17\nquelle: ${ARCHIVNAME}\n---\n# ${titel}\n\n${p}\n`);
}
console.log(`d) lehren/: ${n} Dateien aus ${absaetze17.length} Absätzen des Abschnitts 17 (${lehrenRest.length} ohne Fettsatz → Restliste).`);

/* ── e/f) Bereiche, VISION, REGELN ───────────────────────────────────────── */
const block = (nr) => { const a = ab(nr); return `## Archiv ${nr} — ${a.titel}\n\n${koerper(a)}`; };
const blocks = (...nrs) => nrs.map(block).join('\n');
/* Die Einleitung eines Hauptabschnitts: seine Zeilen bis zur ersten Unterüberschrift. */
const einleitung = (nr) => { const a = ab(nr); const erste = abschnitte.find((x) => x.ebene === 2 && x.von > a.von && x.von < a.bis); return `## Archiv ${nr} — ${a.titel} (Einleitung)\n\n${zeilen.slice(a.von + 1, erste ? erste.von : a.bis).join('\n').trim()}\n`; };
const zitat = (nr, von, bis, was) => `**Archiv ${nr}** (${was}):\n\n${zeilen.slice(von - 1, bis).join('\n').trim()}\n`;
const kopfText = zeilen.slice(0, kopfEnde).join('\n').trim();
const VERWEIS = (nr) => `*Wörtlich aus ${ARCHIVNAME}; Abschnittsnummern beziehen sich darauf.*`;
const bereich = (name, kopfzeile, inhalt) => {
  writeFileSync(join(ROOT, 'bereiche', `${name}.md`), `# ${name}\n\n${kopfzeile}\n\n${VERWEIS()}\n\n${inhalt}`);
};
mkdirSync(join(ROOT, 'bereiche'), { recursive: true });
/* Zeilen für gezielte Zitate finden — über den Text, nicht über Nummern, die altern. */
const zeileVon = (anfang) => { const i = zeilen.findIndex((z) => z.startsWith(anfang)); if (i < 0) throw new Error(`Zitatanfang nicht gefunden: ${anfang}`); return i + 1; };
const absatzAb = (anfang) => { const v = zeileVon(anfang); let b = v; while (b < zeilen.length && zeilen[b].trim()) b++; return [v, b]; };
const q = (nr, anfang, was) => { const [v, b] = absatzAb(anfang); return zitat(nr, v, b, was); };

bereich('firma', 'MANTI & CO. GmbH, Mannheim — Produktionsküche ohne Gastraum, Lieferung und Abholung; Stammdaten und Liefergebiete stehen unten, Betrieb und Aufträge im Journal.', blocks('5.1', '5.2') + '\n' + block('16'));
bereich('shop', 'Bestellt wird im eigenen Shop von Foodamigos unter bestellen.mantiandco.com; die Website verweist dorthin und schließt keinen Vertrag.', blocks('5.3', '5.4') + '\n' + block('13'));
bereich('kennzeichnung', 'Halal ohne Ausnahme, Kennzeichnung nach LMIV je Gericht, Lieferantenauskünfte belegen jeden Chip; offene Herstellerfragen halten das diet-Gatter rot (6 Angaben, Stand 287).', blocks('6', '7') + '\n' + block('14') + '\n**Lieferantenauskünfte** stehen nicht hier, sondern in den Aufnahme-Dateien im Projektwissen (`Beilagen-Kennzeichnung-Aufnahme.md`, Archiv 11.46) und im Wörterbuch `src/data/kennzeichnung-woerterbuch.json` der Website.\n');
bereich('rechtstexte', 'Deutsch ist verbindlich; Impressum und Datenschutzerklärung stehen auf der Website, AGB und Widerruf gehören in den Foodamigos-Checkout; Anwalt für Shop-AGB, Widerruf und Datenschutz-Gegenlese steht aus.', block('12'));
bereich('marke', 'Wortmarke „MANTI / & CO.“ und Signet „M& / CO.“ liegen als SVG im Website-Repositorium (src/assets/brands/MC/), Farben in tokens.css (#20201f, #f6f4ec), Sprachregeln in REGELN.md.', block('8.9') + '\n**Farben:** siehe `bereiche/firma.md` (Archiv 5.1, „Markenfarben“) und `src/styles/tokens.css` der Website. **Sprachregeln:** siehe `REGELN.md` (Archiv 3). **Wortmarke für die E-Mail-Signatur:** `https://www.mantiandco.com/img/brand/wortmarke-mail-hell.png`, erzeugt mit `npm run wortmarke` im Website-Repositorium (Journal 284/285/287).\n');
bereich('marketing', 'Hebel außerhalb des Codes laufen nach `Hebel-ausserhalb-des-Codes.md` (Projektwissen, nicht im Repositorium); der Ausgangswert der Search Console vor dem Livegang steht unten, spätere Messungen im Journal.', block('9.8') + '\n' + block('18.2'));
bereich('restaurant', 'Ein Restaurant ist geplant, Gespräche laufen (Taib, 1. September 2026, im besten Fall drei bis vier Monate); auf der Website steht nur „geplant“, ein Datum aus Gesprächen nicht.', q('15', '**Drei Sachfragen:** Das Restaurant ist geplant', 'Tranche 5c, entschieden am 1. September') + '\n' + q('18.1', '4. **Das Restaurant**', 'Was zuerst zu tun ist'));
bereich('infrastruktur', 'Domain mantiandco.com (Zone bei Cloudflare in Taibs Konto, Registrierung IONOS), Website auf Cloudflare Pages aus mantiandco/website, Shop-Subdomain bestellen.* bei Foodamigos (TLS dort), Mail siehe Archiv 13.6; keine Geheimnisse hier.', blocks('13.6', '13.7') + '\n' + q('15', '**DNS und Domain:**', 'Die Bestellstrecke zieht auf bestellen.mantiandco.com') + '\n' + q('18.1', '1. **Hoster-Auswahl mit Taib**', 'Hosting, Stand 2. September') + '\n' + q('18.1', '   **Historie:**', 'Hosting — Historie') + '\n' + q('18.1', '   **Taibs Gewichtung', 'Hosting — Gewichtung') + '\n' + q('18.1', '   **Neigung damit: Cloudflare Pages**', 'Hosting — Entscheidung und Stand'));
bereich('website', 'Live seit 3. September 2026 auf www.mantiandco.com (Cloudflare Pages, Repositorium mantiandco/website); Technik steht in website/docs/ (gatter, erzeuger, bildstufen, protokoll, inhalte), Vorgänge im Journal.', `## Archiv — Kopf der Gedächtnis-Datei\n\n${kopfText}\n\n` + block('9') + '\n' + einleitung('11') + '\n' + einleitung('18') + '\n' + block('18.1') + '\n**Technik** (Archiv 8 und 10 — Struktur, Datenmodell, Bauregeln, Gatter, Schranken) ist nicht hier wiederholt: sie steht wörtlich aus dem Archiv in `website/docs/` neben dem Code (gatter.md, erzeuger.md, bildstufen.md, protokoll.md, inhalte.md); die vollständigen Abschnitte 8 und 10 stehen im Archiv.\n');
writeFileSync(join(ROOT, 'VISION.md'), `# Vision\n\n*Wörtlich aus ${ARCHIVNAME}, Abschnitt 2. Ändert sich selten; jede Änderung ist eine Entscheidung (entscheidungen/).*\n\n${block('2')}`);
writeFileSync(join(ROOT, 'REGELN.md'), `# Regeln\n\n*Wörtlich aus ${ARCHIVNAME}, Abschnitte 1, 3 und 4. Wie hier gearbeitet wird; das Protokoll des Wissens selbst steht in README.md, das der Website-Aufträge in website/docs/protokoll.md.*\n\n${blocks('1', '3', '4')}`);
console.log(`e/f) bereiche/: ${readdirSync(join(ROOT, 'bereiche')).length} Dateien; VISION.md (Archiv 2), REGELN.md (Archiv 1, 3, 4).`);

/* ── c) Entscheidungen aus scripts/entscheidungen.json ───────────────────── */
const norm = (s) => s.replace(/\s+/g, ' ').trim();
const quelleNorm = norm(text);
const ejson = join(ROOT, 'scripts', 'entscheidungen.json');
mkdirSync(join(ROOT, 'entscheidungen'), { recursive: true });
let entscheidungenRest = [];
if (existsSync(ejson)) {
  for (const alt of readdirSync(join(ROOT, 'entscheidungen'))) unlinkSync(join(ROOT, 'entscheidungen', alt));
  const saetze = JSON.parse(readFileSync(ejson, 'utf8'));
  let k = 0;
  const ids = new Map();
  saetze.forEach((d, i) => ids.set(i, String(i + 1).padStart(4, '0')));
  for (const [i, d] of saetze.entries()) {
    const probleme = [];
    for (const feld of ['entscheidung', 'begruendung']) if (d[feld] && !quelleNorm.includes(norm(d[feld]))) probleme.push(`${feld} nicht wörtlich in der Quelle`);
    if (d.status === 'aufgehoben' && d.aufgehoben_durch_index === undefined) probleme.push('aufgehoben ohne Nachfolger');
    if (probleme.length) { entscheidungenRest.push(`${d.titel} (Archiv ${d.archiv}, Zeile ${d.zeile}): ${probleme.join('; ')}`); continue; }
    k += 1;
    const id = ids.get(i);
    const nach = d.status === 'aufgehoben' ? ids.get(d.aufgehoben_durch_index) : null;
    const inhalt = `---\nstatus: ${d.status}\n${d.datum ? `datum: ${d.datum}\n` : ''}${nach ? `aufgehoben_durch: ${nach}\n` : ''}archiv: ${d.archiv}\nzeile: ${d.zeile}\n---\n# ${d.titel}\n\n## Kontext\n\n${d.kontext || '(siehe Entscheidung)'}\n\n## Entscheidung\n\n${d.entscheidung}\n\n## Begründung\n\n${d.begruendung && d.begruendung !== d.entscheidung ? d.begruendung : '(in der Entscheidung enthalten)'}\n\n## Status\n\n${d.status === 'aufgehoben' ? `aufgehoben durch ${nach}` : 'gilt'}${d.datum ? ` · Datum ${d.datum}` : ' · Datum: im Archiv nicht genannt'}\n\n*Aus dem Archiv: ${ARCHIVNAME}, Abschnitt ${d.archiv}, ab Zeile ${d.zeile}.*\n`;
    writeFileSync(join(ROOT, 'entscheidungen', `${id}-${slug(d.titel)}.md`), inhalt);
  }
  console.log(`c) entscheidungen/: ${k} Dateien aus ${saetze.length} Datensätzen; ${entscheidungenRest.length} nicht geschrieben (Restliste).`);
} else console.log('c) entscheidungen/: scripts/entscheidungen.json fehlt noch — übersprungen.');

/* ── g) Restliste ─────────────────────────────────────────────────────────── */
const ziele = [];
for (const d of ['journal', 'lehren', 'bereiche', 'entscheidungen']) for (const f of readdirSync(join(ROOT, d))) ziele.push(readFileSync(join(ROOT, d, f), 'utf8'));
for (const f of ['VISION.md', 'REGELN.md']) ziele.push(readFileSync(join(ROOT, f), 'utf8'));
let docsDateien = 0;
if (existsSync(DOCS)) for (const f of readdirSync(DOCS)) if (f.endsWith('.md')) { ziele.push(readFileSync(join(DOCS, f), 'utf8')); docsDateien++; }
/* Blockzitate („> …“ je Zeile, wie in website/docs/) zählen als wörtlich: die Präfixe fallen vor dem Vergleich. */
const zielNormRoh = norm(ziele.join('\n'));
const zielNormOhne = norm(ziele.join('\n').replace(/^> ?/gm, ''));
const gelandetIst = (p) => zielNormRoh.includes(norm(p)) || zielNormOhne.includes(norm(p));
const GRUND = { 8: 'Technik der Website — Auszüge in website/docs/, vollständig im Archiv', 10: 'Gatter und Messwerte — Auszüge in website/docs/gatter.md, vollständig im Archiv', 15: 'Entscheidung — nur als Datensatz mit wörtlichem Beleg übernommen; Rest im Archiv', 17: 'Absatz ohne Fettsatz (Einleitung/Trenner)', 4: 'Revidierte Entscheidung — in REGELN.md vollständig, als Datensatz nur mit Beleg' };
const rest = [];
let gesamt = 0, gelandet = 0;
let aktuell = 'Kopf';
for (const blockText of text.split(/\n\s*\n/)) {
  const p = blockText.trim();
  if (!p || p === '---') continue;
  const h = p.match(/^#{1,2} (\d+)/);
  if (h) aktuell = h[1];
  if (/^#{1,6} /.test(p)) continue;
  gesamt += 1;
  if (gelandetIst(p)) gelandet += 1;
  else rest.push({ abschnitt: aktuell, text: p });
}
const jeAbschnitt = {};
for (const r of rest) (jeAbschnitt[r.abschnitt] ??= []).push(r);
let liste = `# Restliste der Wanderung — ${ARCHIVNAME}\n\n*Erzeugt von scripts/wanderung.mjs. ${gesamt} Absätze der Quelle (Überschriften und Trenner ausgenommen), davon ${gelandet} wörtlich in journal/, entscheidungen/, lehren/, bereiche/, VISION.md, REGELN.md oder website/docs/ (${docsDateien} Dateien) wiedergefunden, ${rest.length} nicht — sie bleiben im Archiv, hier mit Grund.*\n`;
for (const [abs, eintr] of Object.entries(jeAbschnitt).sort((a, b) => Number(a[0]) - Number(b[0]))) {
  liste += `\n## Abschnitt ${abs} — ${eintr.length} Absätze · Grund: ${GRUND[abs] ?? 'nicht zugeordnet — bleibt im Archiv, Vermerk hier'}\n\n`;
  for (const e of eintr) liste += `- ${e.text.replace(/\s+/g, ' ').slice(0, 120)}${e.text.length > 120 ? ' …' : ''}\n`;
}
if (entscheidungenRest.length) liste += `\n## Entscheidungs-Datensätze, nicht geschrieben (${entscheidungenRest.length})\n\n` + entscheidungenRest.map((r) => `- ${r}`).join('\n') + '\n';
if (lehrenRest.length) liste += `\n## Abschnitt 17, Absätze ohne Fettsatz (${lehrenRest.length})\n\n` + lehrenRest.map((r) => `- ${r.replace(/\s+/g, ' ').slice(0, 120)}`).join('\n') + '\n';
writeFileSync(join(ROOT, 'archiv', 'Restliste-2026-09-11.md'), liste);
console.log(`g) Restliste: ${gesamt} Absätze, ${gelandet} gelandet, ${rest.length} im Archiv mit Vermerk — je Abschnitt: ${Object.entries(jeAbschnitt).map(([a, e]) => `${a}:${e.length}`).join(' ')}.`);
