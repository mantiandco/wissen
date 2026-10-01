/* Der Erzeuger: STAND.md und OFFEN.md entstehen aus journal/ und bereiche/,
 * nie von Hand. Ein von Hand gepflegter Stand veraltet still; ein erzeugter
 * kann nicht lügen, ohne dass das Journal es tut (Bauplan, Abschnitt 1).
 *
 * Deterministisch: kein Datum der Erzeugung, keine Zufallsreihenfolge —
 * zweimal erzeugen ergibt byteidentische Dateien, und genau das prüft
 * pruefen.mjs (STAND.md und OFFEN.md müssen aktuell sein).
 *
 * STAND.md — je Bereich (Reihenfolge aus schema.mjs):
 *   die Kopfzeile der Bereichsdatei  = die erste nicht leere Zeile nach der
 *                                       Überschrift „# …“ in bereiche/<bereich>.md
 *   der jüngste Journal-Eintrag       = höchstes Datum, dann höchste Nummer,
 *                                       dann Dateiname; mit Titel (erste
 *                                       „# “-Zeile) und seinem ersten Absatz
 *
 * OFFEN.md — je Bereich alle „## Offen“-Abschnitte der Einträge, die kein
 * späterer Eintrag im Kopffeld `erledigt: [kennung, …]` nennt. Später heißt:
 * größeres Datum, bei gleichem Datum höhere Nummer, bei gleicher Nummer der
 * spätere Dateiname. */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { BEREICHE, JOURNAL_DATEI, kopf, kennung, erledigtVerweis, offenPunkte } from './schema.mjs';

const KOPF_STAND =
  '# Stand\n\n*Erzeugt von `scripts/stand.mjs` aus `journal/` und `bereiche/` — nicht von Hand ändern; `npm run stand` erzeugt neu. Je Bereich: die Kopfzeile der Bereichsdatei und der jüngste Journal-Eintrag.*\n';
const KOPF_OFFEN =
  '# Offen\n\n*Erzeugt von `scripts/stand.mjs` aus den „## Offen“-Abschnitten der Journal-Einträge, die kein späterer Eintrag unter `erledigt:` nennt — nicht von Hand ändern. Wer etwas erledigt, schreibt einen Eintrag mit `erledigt: [kennung]`.*\n';

export function eintraege(root) {
  const dir = join(root, 'journal');
  if (!existsSync(dir)) return [];
  const liste = [];
  for (const name of readdirSync(dir).sort()) {
    const m = name.match(JOURNAL_DATEI);
    if (!m) continue;
    const text = readFileSync(join(dir, name), 'utf8');
    const { felder, rest } = kopf(text);
    if (!felder) continue;
    const titel = (rest.match(/^# (.+)$/m) ?? [null, name])[1].trim();
    liste.push({ name, felder, rest, titel, kennung: kennung(felder) });
  }
  liste.sort(vergleich);
  return liste;
}

const vergleich = (a, b) =>
  a.felder.datum.localeCompare(b.felder.datum) ||
  Number(a.felder.nummer) - Number(b.felder.nummer) ||
  a.name.localeCompare(b.name);

const ersterAbsatz = (rest) => {
  const ohneTitel = rest.replace(/^# .+$/m, '');
  const abs = ohneTitel
    .split(/\n\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  return abs[0] ?? '';
};

/* Zeilenweise, nicht per Regex bis zum Dateiende: JavaScript kennt kein \Z,
   und ein lazy-Muster endete am ersten großen Z im Text (Auftrag 287). */
export const offenBlock = (rest) => {
  const zeilen = rest.split('\n');
  const start = zeilen.findIndex((z) => /^## Offen\s*$/.test(z));
  if (start < 0) return null;
  const block = [];
  for (const z of zeilen.slice(start + 1)) {
    if (/^## /.test(z)) break;
    block.push(z);
  }
  const text = block.join('\n').trim();
  return text || null;
};

export const kopfzeile = (root, bereich) => {
  const p = join(root, 'bereiche', `${bereich}.md`);
  if (!existsSync(p)) return null;
  const zeilen = readFileSync(p, 'utf8').split('\n');
  let nachTitel = false;
  for (const z of zeilen) {
    if (!nachTitel) {
      if (/^# /.test(z)) nachTitel = true;
      continue;
    }
    if (z.trim() && !z.startsWith('#')) return z.trim();
  }
  return null;
};

export const erledigtListe = (f) => (Array.isArray(f.erledigt) ? f.erledigt : f.erledigt ? [f.erledigt] : []);

export function erzeuge(root) {
  const alle = eintraege(root);
  /* Erledigt zählt nur, wenn der nennende Eintrag später ist als der genannte.
     Ganze Kennung → der ganze Offen-Block fällt; kennung#N → nur Punkt N. */
  const verweiseAuf = (e) =>
    alle
      .filter((s) => vergleich(s, e) > 0)
      .flatMap((s) => erledigtListe(s.felder).map(erledigtVerweis))
      .filter((v) => v.kennung === e.kennung);
  const offenRest = (e) => {
    const block = offenBlock(e.rest);
    if (!block) return null;
    const v = verweiseAuf(e);
    if (v.some((x) => x.punkt === null)) return null;
    const weg = new Set(v.map((x) => x.punkt));
    if (!weg.size) return block;
    let n = 0;
    const zeilen = block.split('\n').filter((z) => (/^- /.test(z) ? !weg.has(++n) : !weg.has(n)));
    const rest = zeilen.join('\n').trim();
    return offenPunkte(rest).length ? rest : null;
  };

  let stand = KOPF_STAND;
  let offen = KOPF_OFFEN;
  for (const bereich of BEREICHE) {
    const eigene = alle.filter((e) => e.felder.bereich === bereich);
    stand += `\n## ${bereich}\n\n`;
    const kz = kopfzeile(root, bereich);
    stand += `**Bereichsdatei:** ${kz ? `${kz} (\`bereiche/${bereich}.md\`)` : '(keine Bereichsdatei)'}\n\n`;
    const j = eigene.at(-1);
    if (j) {
      stand += `**Jüngster Eintrag:** ${j.felder.datum} · ${j.felder.nummer}${j.felder.zusatz ?? ''} · ${j.titel} (\`journal/${j.name}\`)\n\n`;
      const a = ersterAbsatz(j.rest);
      if (a) stand += `${a}\n`;
    } else stand += '**Jüngster Eintrag:** (kein Journal-Eintrag)\n';

    const offene = eigene.map((e) => ({ e, rest: offenRest(e) })).filter((x) => x.rest);
    if (offene.length) {
      offen += `\n## ${bereich}\n`;
      for (const { e, rest } of offene) {
        offen += `\n### ${e.felder.datum} · ${e.felder.nummer}${e.felder.zusatz ?? ''} · ${e.titel} (\`journal/${e.name}\`)\n\n${rest}\n`;
      }
    }
  }
  return { stand, offen };
}

if (process.argv[1] && process.argv[1].endsWith('stand.mjs')) {
  const root = process.argv[2] ?? '.';
  const { stand, offen } = erzeuge(root);
  writeFileSync(join(root, 'STAND.md'), stand);
  writeFileSync(join(root, 'OFFEN.md'), offen);
  console.log(`STAND.md (${stand.length} Zeichen) und OFFEN.md (${offen.length} Zeichen) erzeugt aus ${eintraege(root).length} Einträgen.`);
}
