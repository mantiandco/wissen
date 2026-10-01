/* Das Gatter des Wissens (Bauplan, Abschnitt 4). Läuft vor jedem Merge und
 * prüft die Form, nicht den Inhalt:
 *
 *   journal/        Dateiname JJJJ-MM-TT-NNN[z]-slug.md; Kopf mit datum (ISO,
 *                   gültig), nummer (ganz), bereich und typ aus den Listen,
 *                   autor; Dateiname passt zum Kopf; nummer[+zusatz] bei typ
 *                   auftrag eindeutig; neue Einträge (autor ≠ archiv) tragen
 *                   eine Nummer größer als jede frühere; berichtigt verweist
 *                   auf einen bestehenden Eintrag (und steht nur bei typ
 *                   berichtigung); erledigt verweist auf bestehende Einträge
 *   entscheidungen/ Dateiname NNNN-slug.md; Kopf mit status (gilt |
 *                   aufgehoben) und datum; aufgehoben → aufgehoben_durch nennt
 *                   eine bestehende Entscheidung
 *   lehren/         Dateiname NNN-slug.md, eine „# “-Überschrift
 *   bereiche/       nur Dateien, deren Name ein Bereich aus der Liste ist
 *   oberste Ebene   nur, was schema.mjs erlaubt — keine Datei außerhalb der Form
 *   Geheimnisse     Wortprüfsummen und Muster aus geheimnisse.mjs, über jede
 *                   .md-Datei (auch das Archiv): rot mit Datei, ohne Zitat
 *   STAND/OFFEN     die Erzeugung wiederholen muss byteidentisch sein
 *
 * Zuerst der Selbsttest: jede Prüfung wird an einer Vorrichtung im
 * Temporärordner einmal zum Fallen gebracht — ein Gatter, das noch nie
 * gefallen ist, ist keine bestandene Prüfung, sondern eine unbelegte
 * (Gedächtnis, Abschnitt 17). */
import { readdirSync, readFileSync, statSync, existsSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { BEREICHE, TYPEN, STATUS, UNTERLAGEN_STATUS, OBERSTE_EBENE, JOURNAL_DATEI, ENTSCHEIDUNG_DATEI, LEHRE_DATEI, kopf, kennung, slug, erledigtVerweis, offenPunkte } from './schema.mjs';
import { WORTPRUEFSUMMEN, MUSTER, hashWort, woerter } from './geheimnisse.mjs';
import { erzeuge, offenBlock } from './stand.mjs';

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const datumGueltig = (d) => ISO.test(d) && !Number.isNaN(Date.parse(d)) && new Date(d).toISOString().slice(0, 10) === d;

const mdDateien = (dir) => {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? (e.name === 'node_modules' || e.name === '.git' ? [] : mdDateien(join(dir, e.name))) : e.name.endsWith('.md') ? [join(dir, e.name)] : []
  );
};

/* Prüft ein Wissens-Verzeichnis; gibt Fehlerzeilen und Zählwerk zurück.
   `pruefsummen` ist für den Selbsttest austauschbar. */
export function pruefe(root, { pruefsummen = WORTPRUEFSUMMEN, standPruefen = true } = {}) {
  const fehler = [];
  const zahl = { journal: 0, entscheidungen: 0, lehren: 0, bereiche: 0, dateien: 0 };

  /* Oberste Ebene */
  for (const name of readdirSync(root)) {
    if (name === '.git' || name === 'node_modules') continue;
    if (!OBERSTE_EBENE.includes(name)) fehler.push(`außerhalb der Form: ${name} (oberste Ebene erlaubt nur ${OBERSTE_EBENE.join(', ')})`);
  }

  /* Journal */
  const kennungen = new Set();
  const auftragNummern = new Map();
  const eintraege = [];
  const jdir = join(root, 'journal');
  for (const name of existsSync(jdir) ? readdirSync(jdir).sort() : []) {
    if (name === '.DS_Store') continue;
    zahl.journal += 1;
    const m = name.match(JOURNAL_DATEI);
    if (!m) {
      fehler.push(`journal/${name}: Dateiname nicht in der Form JJJJ-MM-TT-NNN[z]-slug.md`);
      continue;
    }
    const text = readFileSync(join(jdir, name), 'utf8');
    const { felder, rest, fehler: kf } = kopf(text);
    for (const f of kf) fehler.push(`journal/${name}: ${f}`);
    if (!felder) continue;
    const ort = `journal/${name}`;
    if (!datumGueltig(String(felder.datum ?? ''))) fehler.push(`${ort}: datum fehlt oder ist kein gültiges ISO-Datum (${felder.datum ?? '—'})`);
    if (!/^\d+$/.test(String(felder.nummer ?? ''))) fehler.push(`${ort}: nummer fehlt oder ist keine ganze Zahl (${felder.nummer ?? '—'})`);
    if (felder.zusatz !== undefined && !/^[a-z]$/.test(String(felder.zusatz))) fehler.push(`${ort}: zusatz muss ein Kleinbuchstabe sein (${felder.zusatz})`);
    if (!BEREICHE.includes(felder.bereich)) fehler.push(`${ort}: bereich „${felder.bereich ?? '—'}“ nicht in der Liste (${BEREICHE.join(', ')})`);
    if (!TYPEN.includes(felder.typ)) fehler.push(`${ort}: typ „${felder.typ ?? '—'}“ nicht in der Liste (${TYPEN.join(', ')})`);
    if (!felder.autor) fehler.push(`${ort}: autor fehlt`);
    if (!/^# /m.test(rest)) fehler.push(`${ort}: keine Überschrift „# …“ im Text`);
    if (felder.datum && felder.nummer !== undefined) {
      const soll = `${felder.datum}-${String(felder.nummer).padStart(3, '0')}${felder.zusatz ?? ''}`;
      const ist = `${m[1]}-${m[2]}${m[3]}`;
      if (soll !== ist) fehler.push(`${ort}: Dateiname (${ist}) passt nicht zum Kopf (${soll})`);
    }
    if (felder.typ === 'berichtigung' && !felder.berichtigt) fehler.push(`${ort}: typ berichtigung ohne Feld berichtigt`);
    if (felder.typ !== 'berichtigung' && felder.berichtigt) fehler.push(`${ort}: Feld berichtigt nur bei typ berichtigung`);
    if (felder.typ === 'auftrag' && /^\d+$/.test(String(felder.nummer))) {
      const k = `${felder.nummer}${felder.zusatz ?? ''}`;
      if (auftragNummern.has(k)) fehler.push(`${ort}: Auftragsnummer ${k} doppelt (schon in ${auftragNummern.get(k)})`);
      else auftragNummern.set(k, ort);
    }
    const ken = kennung(felder);
    kennungen.add(ken);
    eintraege.push({ ort, felder, ken, punkte: offenPunkte(offenBlock(rest)).length });
  }
  /* Verweise und Fortlaufen — erst, wenn alle Kennungen bekannt sind. */
  const nummern = eintraege.filter((e) => /^\d+$/.test(String(e.felder.nummer)));
  for (const e of eintraege) {
    if (e.felder.berichtigt && !kennungen.has(String(e.felder.berichtigt))) fehler.push(`${e.ort}: berichtigt nennt „${e.felder.berichtigt}“ — kein Eintrag mit dieser Kennung`);
    for (const k of Array.isArray(e.felder.erledigt) ? e.felder.erledigt : e.felder.erledigt ? [e.felder.erledigt] : []) {
      const v = erledigtVerweis(k);
      const ziel = eintraege.find((x) => x.ken === v.kennung);
      if (!ziel) fehler.push(`${e.ort}: erledigt nennt „${k}“ — kein Eintrag mit dieser Kennung`);
      else if (v.punkt !== null && (v.punkt < 1 || v.punkt > ziel.punkte)) fehler.push(`${e.ort}: erledigt nennt „${k}“ — ${v.kennung} hat ${ziel.punkte} Offen-Punkt(e)`);
    }
    if (e.felder.autor && e.felder.autor !== 'archiv' && e.felder.typ === 'auftrag' && /^\d+$/.test(String(e.felder.nummer))) {
      const frueher = nummern.filter((f) => f !== e && f.felder.typ === 'auftrag' && String(f.felder.datum) < String(e.felder.datum));
      const hoechste = Math.max(-1, ...frueher.map((f) => Number(f.felder.nummer)));
      if (Number(e.felder.nummer) <= hoechste) fehler.push(`${e.ort}: nummer ${e.felder.nummer} ist nicht fortlaufend — ein früherer Auftrag trägt schon ${hoechste}`);
    }
  }

  /* Entscheidungen */
  const edir = join(root, 'entscheidungen');
  const eids = new Set();
  const offeneVerweise = [];
  for (const name of existsSync(edir) ? readdirSync(edir).sort() : []) {
    if (name === '.DS_Store') continue;
    zahl.entscheidungen += 1;
    const m = name.match(ENTSCHEIDUNG_DATEI);
    if (!m) {
      fehler.push(`entscheidungen/${name}: Dateiname nicht in der Form NNNN-slug.md`);
      continue;
    }
    eids.add(m[1]);
    const { felder, rest, fehler: kf } = kopf(readFileSync(join(edir, name), 'utf8'));
    for (const f of kf) fehler.push(`entscheidungen/${name}: ${f}`);
    if (!felder) continue;
    if (!STATUS.includes(felder.status)) fehler.push(`entscheidungen/${name}: status „${felder.status ?? '—'}“ nicht in (${STATUS.join(' | ')})`);
    if (felder.datum !== undefined && felder.datum !== '' && !datumGueltig(String(felder.datum))) fehler.push(`entscheidungen/${name}: datum ungültig (${felder.datum})`);
    if (felder.status === 'aufgehoben') {
      if (!felder.aufgehoben_durch) fehler.push(`entscheidungen/${name}: aufgehoben ohne aufgehoben_durch`);
      else offeneVerweise.push({ name, ziel: String(felder.aufgehoben_durch) });
    }
    if (!/^# /m.test(rest)) fehler.push(`entscheidungen/${name}: keine Überschrift „# …“`);
  }
  for (const v of offeneVerweise) if (!eids.has(v.ziel)) fehler.push(`entscheidungen/${v.name}: aufgehoben_durch nennt ${v.ziel} — keine Entscheidung mit dieser Nummer`);

  /* Lehren */
  const ldir = join(root, 'lehren');
  for (const name of existsSync(ldir) ? readdirSync(ldir).sort() : []) {
    if (name === '.DS_Store') continue;
    zahl.lehren += 1;
    if (!LEHRE_DATEI.test(name)) fehler.push(`lehren/${name}: Dateiname nicht in der Form NNN-slug.md`);
    else if (!/^# /m.test(readFileSync(join(ldir, name), 'utf8'))) fehler.push(`lehren/${name}: keine Überschrift „# …“`);
  }

  /* Unterlagen — abgenommene Quelldokumente, wörtlich, mit Kopf. */
  const udir = join(root, 'unterlagen');
  zahl.unterlagen = 0;
  const alleUnterlagen = (dir, rel = '') =>
    existsSync(dir)
      ? readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
          e.name === '.DS_Store' ? [] : e.isDirectory() ? alleUnterlagen(join(dir, e.name), `${rel}${e.name}/`) : [`${rel}${e.name}`]
        )
      : [];
  const unterlagenListe = alleUnterlagen(udir).sort();
  for (const name of unterlagenListe) {
    zahl.unterlagen += 1;
    const ort = `unterlagen/${name}`;
    if (!name.endsWith('.md')) {
      const begleit = name.replace(/\.[^./]+$/, '.md');
      if (!unterlagenListe.includes(begleit)) fehler.push(`${ort}: keine Begleitdatei ${begleit} mit Kopf`);
      continue;
    }
    const { felder, fehler: kf } = kopf(readFileSync(join(udir, name), 'utf8'));
    for (const f of kf) fehler.push(`${ort}: ${f}`);
    if (!felder) continue;
    if (!datumGueltig(String(felder.datum ?? ''))) fehler.push(`${ort}: datum fehlt oder ungültig (${felder.datum ?? '—'})`);
    if (!BEREICHE.includes(felder.bereich)) fehler.push(`${ort}: bereich „${felder.bereich ?? '—'}“ nicht in der Liste`);
    if (!UNTERLAGEN_STATUS.includes(felder.status)) fehler.push(`${ort}: status „${felder.status ?? '—'}“ nicht in (${UNTERLAGEN_STATUS.join(' | ')})`);
    if (!felder.verweis) fehler.push(`${ort}: verweis fehlt (welcher Auftrag die Unterlage nutzte)`);
  }

  /* Bereiche */
  const bdir = join(root, 'bereiche');
  for (const name of existsSync(bdir) ? readdirSync(bdir).sort() : []) {
    if (name === '.DS_Store') continue;
    zahl.bereiche += 1;
    const b = name.replace(/\.md$/, '');
    if (!name.endsWith('.md') || !BEREICHE.includes(b)) fehler.push(`bereiche/${name}: kein Bereich aus der Liste (${BEREICHE.join(', ')})`);
  }

  /* Geheimnisse — über jede .md-Datei, das Archiv eingeschlossen. */
  const hashes = new Map(pruefsummen.map((p) => [p.hash, p.hinweis]));
  for (const datei of mdDateien(root)) {
    zahl.dateien += 1;
    const text = readFileSync(datei, 'utf8');
    const rel = datei.slice(root.length + 1);
    if (hashes.size)
      for (const w of woerter(text)) {
        const h = hashWort(w);
        if (hashes.has(h)) fehler.push(`GEHEIMNIS in ${rel}: ein Wort der Geheimnisliste (${hashes.get(h)}) — nicht zitiert; die Datei muss bereinigt werden`);
      }
    for (const m of MUSTER) if (m.re.test(text)) fehler.push(`GEHEIMNIS in ${rel}: Muster „${m.name}“ — nicht zitiert; die Datei muss bereinigt werden`);
  }

  /* STAND.md und OFFEN.md aktuell? */
  if (standPruefen) {
    const { stand, offen } = erzeuge(root);
    for (const [name, soll] of [['STAND.md', stand], ['OFFEN.md', offen]]) {
      const p = join(root, name);
      if (!existsSync(p)) fehler.push(`${name} fehlt — npm run stand`);
      else if (readFileSync(p, 'utf8') !== soll) fehler.push(`${name} ist nicht aktuell — die Erzeugung ergibt andere Bytes; npm run stand`);
    }
  }
  return { fehler, zahl };
}

/* ── Selbsttest ─────────────────────────────────────────────────────────── */
function vorrichtung(bauen) {
  const dir = mkdtempSync(join(tmpdir(), 'wissen-probe-'));
  for (const d of ['journal', 'entscheidungen', 'lehren', 'bereiche', 'archiv', 'scripts']) mkdirSync(join(dir, d));
  writeFileSync(join(dir, 'README.md'), '# Probe\n');
  const eintrag = (name, kopfzeilen, text = '# Ein Eintrag\n\nText.\n') => writeFileSync(join(dir, 'journal', name), `---\n${kopfzeilen}\n---\n${text}`);
  eintrag('2026-09-01-276-erster.md', 'datum: 2026-09-01\nnummer: 276\nbereich: website\ntyp: auftrag\nautor: archiv');
  bauen({ dir, eintrag });
  const { stand, offen } = erzeuge(dir);
  if (!existsSync(join(dir, 'STAND.md'))) writeFileSync(join(dir, 'STAND.md'), stand);
  if (!existsSync(join(dir, 'OFFEN.md'))) writeFileSync(join(dir, 'OFFEN.md'), offen);
  return dir;
}
function probe(name, bauen, erwartet, opts = {}) {
  const dir = vorrichtung(bauen);
  const { fehler } = pruefe(dir, opts);
  rmSync(dir, { recursive: true, force: true });
  const ok = erwartet(fehler);
  console.log(`  ${ok ? '✓' : '✗'} ${name}`);
  return ok ? 0 : 1;
}
const PROBEWORT = 'probewortdesselbsttests';
const PROBEHASH = [{ hash: hashWort(PROBEWORT), hinweis: 'Probewort' }];
let gefallen = 0;
console.log('Selbsttest — jede Prüfung einmal an einer Vorrichtung zum Fallen gebracht:');
gefallen += probe('sauberer Bestand: kein Fehler', () => {}, (f) => f.length === 0);
gefallen += probe('Eintrag ohne Nummer → rot', ({ eintrag }) => eintrag('2026-09-02-277-ohne.md', 'datum: 2026-09-02\nbereich: website\ntyp: auftrag\nautor: taib'), (f) => f.some((x) => x.includes('nummer fehlt')));
gefallen += probe('doppelte Auftragsnummer → rot', ({ eintrag }) => eintrag('2026-09-02-276-zweiter.md', 'datum: 2026-09-02\nnummer: 276\nbereich: website\ntyp: auftrag\nautor: taib'), (f) => f.some((x) => x.includes('doppelt')));
gefallen += probe('Nummer nicht fortlaufend → rot', ({ eintrag }) => eintrag('2026-09-03-270-zurueck.md', 'datum: 2026-09-03\nnummer: 270\nbereich: website\ntyp: auftrag\nautor: claude-code'), (f) => f.some((x) => x.includes('nicht fortlaufend')));
gefallen += probe('Geheimnis-Wort in einem Eintrag → rot mit Datei, ohne das Wort', ({ eintrag }) => eintrag('2026-09-02-277-geheim.md', 'datum: 2026-09-02\nnummer: 277\nbereich: kennzeichnung\ntyp: befund\nautor: taib', `# Rezept\n\nDarin ist ${PROBEWORT} enthalten.\n`), (f) => f.some((x) => x.startsWith('GEHEIMNIS in journal/2026-09-02-277-geheim.md') && !x.includes(PROBEWORT)), { pruefsummen: PROBEHASH });
gefallen += probe('Muster (IBAN) → rot ohne Zitat', ({ eintrag }) => eintrag('2026-09-02-277-konto.md', 'datum: 2026-09-02\nnummer: 277\nbereich: firma\ntyp: befund\nautor: taib', '# Konto\n\nDE89 3704 0044 0532 0130 00\n'), (f) => f.some((x) => x.includes('Muster „IBAN“') && !x.includes('3704')));
gefallen += probe('berichtigt auf nicht existierenden Eintrag → rot', ({ eintrag }) => eintrag('2026-09-02-277-berichtigung.md', 'datum: 2026-09-02\nnummer: 277\nbereich: website\ntyp: berichtigung\nautor: taib\nberichtigt: 2026-08-01-200'), (f) => f.some((x) => x.includes('berichtigt nennt')));
gefallen += probe('Bereich außerhalb der Liste → rot', ({ eintrag }) => eintrag('2026-09-02-277-bereich.md', 'datum: 2026-09-02\nnummer: 277\nbereich: kueche\ntyp: befund\nautor: taib'), (f) => f.some((x) => x.includes('bereich „kueche“')));
gefallen += probe('Dateiname passt nicht zum Kopf → rot', ({ eintrag }) => eintrag('2026-09-02-278-falsch.md', 'datum: 2026-09-02\nnummer: 277\nbereich: website\ntyp: befund\nautor: taib'), (f) => f.some((x) => x.includes('passt nicht zum Kopf')));
gefallen += probe('aufgehobene Entscheidung ohne Nachfolger → rot', ({ dir }) => writeFileSync(join(dir, 'entscheidungen', '0001-alt.md'), '---\nstatus: aufgehoben\naufgehoben_durch: 0009\n---\n# Alt\n'), (f) => f.some((x) => x.includes('aufgehoben_durch nennt 0009')));
gefallen += probe('Datei außerhalb der Form → rot', ({ dir }) => writeFileSync(join(dir, 'NOTIZ.txt'), 'x'), (f) => f.some((x) => x.includes('außerhalb der Form: NOTIZ.txt')));
gefallen += probe('STAND.md nicht aktuell → rot', ({ dir }) => writeFileSync(join(dir, 'STAND.md'), '# Stand\n\nveraltet\n'), (f) => f.some((x) => x.includes('STAND.md ist nicht aktuell')));
gefallen += probe('Unterlage ohne Begleitdatei → rot', ({ dir }) => { mkdirSync(join(dir, 'unterlagen', 'metro'), { recursive: true }); writeFileSync(join(dir, 'unterlagen', 'metro', 'a.pdf'), '%PDF'); }, (f) => f.some((x) => x.includes('unterlagen/metro/a.pdf: keine Begleitdatei')));
gefallen += probe('Unterlage ohne status → rot', ({ dir }) => { mkdirSync(join(dir, 'unterlagen')); writeFileSync(join(dir, 'unterlagen', 'x.md'), '---\ndatum: 2026-09-02\nbereich: marketing\nverweis: 276\n---\n# X\n'); }, (f) => f.some((x) => x.includes('unterlagen/x.md: status')));
gefallen += probe('erledigt kennung#N außerhalb der Punkte → rot', ({ eintrag }) => {
  eintrag('2026-09-02-277-offen.md', 'datum: 2026-09-02\nnummer: 277\nbereich: shop\ntyp: befund\nautor: taib', '# Offenes\n\n## Offen\n- Punkt A\n- Punkt B\n');
  eintrag('2026-09-03-278-zu.md', 'datum: 2026-09-03\nnummer: 278\nbereich: shop\ntyp: befund\nautor: taib\nerledigt: [2026-09-02-277#3]', '# Zu\n');
}, (f) => f.some((x) => x.includes('hat 2 Offen-Punkt')));
gefallen += probe('erledigt kennung#N nimmt nur diesen Punkt', ({ eintrag, dir }) => {
  eintrag('2026-09-02-277-offen.md', 'datum: 2026-09-02\nnummer: 277\nbereich: shop\ntyp: befund\nautor: taib', '# Offenes\n\n## Offen\n- Punkt A\n- Punkt B\n');
  eintrag('2026-09-03-278-zu.md', 'datum: 2026-09-03\nnummer: 278\nbereich: shop\ntyp: befund\nautor: taib\nerledigt: [2026-09-02-277#1]', '# Zu\n');
  const { offen } = erzeuge(dir);
  writeFileSync(join(dir, 'OFFEN.md'), offen);
  if (offen.includes('Punkt A') || !offen.includes('Punkt B')) writeFileSync(join(dir, 'lehren', 'x.md'), 'falsch');
}, (f) => !f.some((x) => x.includes('lehren/x.md')));
gefallen += probe('erledigt nimmt Offenes aus OFFEN.md', ({ eintrag, dir }) => {
  eintrag('2026-09-02-277-offen.md', 'datum: 2026-09-02\nnummer: 277\nbereich: shop\ntyp: befund\nautor: taib', '# Offenes\n\n## Offen\n- Punkt A\n');
  eintrag('2026-09-03-278-zu.md', 'datum: 2026-09-03\nnummer: 278\nbereich: shop\ntyp: befund\nautor: taib\nerledigt: [2026-09-02-277]', '# Zu\n\nerledigt.\n');
  const { offen } = erzeuge(dir);
  writeFileSync(join(dir, 'OFFEN.md'), offen);
  if (offen.includes('Punkt A')) writeFileSync(join(dir, 'lehren', 'x.md'), 'Punkt A steht noch in OFFEN');
}, (f) => !f.some((x) => x.includes('lehren/x.md')));
console.log(`  ${17 - gefallen} von 17 Proben bestanden.\n`);
if (gefallen) {
  console.log('PRUEFEN GATE: FAIL (Selbsttest)');
  process.exit(1);
}

const root = process.argv[2] ?? '.';
const { fehler, zahl } = pruefe(root);
console.log(`Bestand: ${zahl.journal} Journal-Einträge, ${zahl.entscheidungen} Entscheidungen, ${zahl.lehren} Lehren, ${zahl.bereiche} Bereichsdateien, ${zahl.unterlagen} Unterlagen; ${zahl.dateien} .md-Dateien auf Geheimnisse geprüft (Wortprüfsummen eingetragen: ${WORTPRUEFSUMMEN.length}).`);
for (const f of fehler) console.log(`  ✗ ${f}`);
console.log(fehler.length === 0 ? '\nPRUEFEN GATE: pass' : `\nPRUEFEN GATE: FAIL (${fehler.length})`);
process.exit(fehler.length === 0 ? 0 : 1);
