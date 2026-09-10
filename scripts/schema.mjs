/* Die Form des Wissens — an einer Stelle, gelesen von pruefen.mjs, stand.mjs
 * und der Wanderung. Wer einen Bereich oder einen Typ hinzufügt, tut es hier;
 * das Gatter kennt danach beides, die README nennt beide Listen.
 *
 * Ein Journal-Eintrag (journal/JJJJ-MM-TT-NNN[z]-slug.md) trägt im Kopf:
 *
 *   datum        JJJJ-MM-TT, Pflicht
 *   nummer       ganze Zahl, Pflicht — die Auftragsnummer; bei typ auftrag
 *                eindeutig (zusammen mit zusatz) und für neue Einträge größer
 *                als jede frühere
 *   zusatz       ein Kleinbuchstabe, nur für Nachträge (256a, 262b …)
 *   bereich      aus BEREICHE, Pflicht
 *   typ          aus TYPEN, Pflicht
 *   autor        Pflicht — claude-code, taib, claude-chat, archiv, <agent>
 *   betrifft     Liste von Stichworten, [a, b, c]
 *   berichtigt   Kennung eines bestehenden Eintrags (datum-nummer[zusatz]),
 *                Pflicht bei typ berichtigung, sonst verboten
 *   erledigt     Liste von Kennungen — die „## Offen“-Punkte dieser Einträge
 *                gelten damit als erledigt (stand.mjs nimmt sie aus OFFEN.md)
 *   archiv       Abschnitt der eingefrorenen Gedächtnis-Datei, nur autor archiv
 *
 * Darunter Prosa; ein Abschnitt „## Offen“ mit Aufzählungspunkten ist das,
 * was stand.mjs für OFFEN.md liest. */
export const BEREICHE = [
  'website',
  'shop',
  'infrastruktur',
  'rechtstexte',
  'marke',
  'kennzeichnung',
  'marketing',
  'restaurant',
  'firma',
];

export const TYPEN = ['auftrag', 'entscheidung', 'befund', 'berichtigung', 'lehre'];

export const STATUS = ['gilt', 'aufgehoben'];

/* Was auf oberster Ebene liegen darf — alles andere ist außerhalb der Form. */
export const OBERSTE_EBENE = [
  'README.md',
  'VISION.md',
  'REGELN.md',
  'STAND.md',
  'OFFEN.md',
  'package.json',
  '.gitignore',
  'journal',
  'entscheidungen',
  'lehren',
  'bereiche',
  'archiv',
  'scripts',
];

export const JOURNAL_DATEI = /^(\d{4}-\d{2}-\d{2})-(\d{3})([a-z]?)-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
export const ENTSCHEIDUNG_DATEI = /^(\d{4})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;
export const LEHRE_DATEI = /^(\d{3})-([a-z0-9]+(?:-[a-z0-9]+)*)\.md$/;

/* Kopf lesen: „---“, Zeilen „schlüssel: wert“, „---“. Listen als [a, b, c].
 * Kein YAML-Parser — die Form ist absichtlich so klein, dass ein Texteditor
 * genügt und kein Paket nötig ist. */
export function kopf(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { felder: null, rest: text, fehler: ['kein Kopf (--- … ---) am Anfang'] };
  const felder = {};
  const fehler = [];
  for (const zeile of m[1].split('\n')) {
    if (!zeile.trim() || zeile.trim().startsWith('#')) continue;
    const t = zeile.match(/^([a-z_]+):\s*(.*)$/);
    if (!t) {
      fehler.push(`Kopfzeile nicht lesbar: „${zeile}“`);
      continue;
    }
    let wert = t[2].replace(/\s+#.*$/, '').trim();
    if (wert.startsWith('[') && wert.endsWith(']')) {
      wert = wert
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
    if (t[1] in felder) fehler.push(`Kopffeld doppelt: ${t[1]}`);
    felder[t[1]] = wert;
  }
  return { felder, rest: text.slice(m[0].length), fehler };
}

export const kennung = (f) => `${f.datum}-${String(f.nummer).padStart(3, '0')}${f.zusatz ?? ''}`;

/* Ein Slug aus einem Titel: klein, ASCII, Bindestriche. Umlaute werden
 * umschrieben, damit der Dateiname in jeder Umgebung gleich heißt. */
export function slug(titel) {
  return titel
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
    .replace(/-+$/, '') || 'eintrag';
}
