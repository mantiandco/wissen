/* Die Geheimnisliste des Gatters. Was nicht ins Netz darf, darf auch nicht ins
 * Wissen — die Rezeptur-Lehre (Gedächtnis 3.5: die Zusammensetzung der
 * Gewürzmischung „steht bewusst in keiner Datei“).
 *
 * Zwei Teile:
 *
 * 1. WORTPRÜFSUMMEN. Die vier Rezeptur-Bestandteile stehen hier nicht im
 *    Klartext, sondern als SHA-256 über das kleingeschriebene Wort. Das Gatter
 *    zerlegt jede Datei in Wörter, hasht sie und vergleicht — ein Treffer wird
 *    rot gemeldet, mit Datei, ohne das Wort zu nennen. Wer die Liste anlegt,
 *    tippt das Wort in `npm run geheimnis -- <wort>`, das den Hash ausgibt,
 *    und trägt nur den Hash ein; das Wort selbst landet nirgends.
 *
 *    Stand 287: DIE VIER EINTRÄGE FEHLEN NOCH — Claude Code kennt die Wörter
 *    nicht, und das ist richtig so. Taib trägt sie ein (Auftrag 287, §9,
 *    Meldung). Bis dahin prüft dieser Teil nur die Probewörter des Selbsttests.
 *
 * 2. MUSTER für Zugangsdaten, Passphrasen, Kontodaten, Token — regulär,
 *    im Klartext, weil sie keine Geheimnisse sind, sondern deren Form. Ein
 *    Treffer nennt Datei und Musternamen, nie die Fundstelle selbst. */
import { createHash } from 'node:crypto';

export const hashWort = (wort) =>
  createHash('sha256')
    .update(String(wort).trim().toLowerCase())
    .digest('hex');

/* Die Wortprüfsummen. Format: { hash, hinweis } — der Hinweis sagt nur, wozu
 * der Eintrag gehört (nie das Wort). Vier Rezeptur-Zeilen sind vorgesehen. */
export const WORTPRUEFSUMMEN = [
  // { hash: '<sha256>', hinweis: 'Rezeptur-Bestandteil 1' },
  // { hash: '<sha256>', hinweis: 'Rezeptur-Bestandteil 2' },
  // { hash: '<sha256>', hinweis: 'Rezeptur-Bestandteil 3' },
  // { hash: '<sha256>', hinweis: 'Rezeptur-Bestandteil 4' },
];

export const MUSTER = [
  { name: 'IBAN', re: /\b[A-Z]{2}\d{2}(?:[ ]?[0-9A-Z]{4}){3,7}(?:[ ]?[0-9A-Z]{1,4})?\b/ },
  { name: 'Passwort/Passphrase mit Wert', re: /\b(?:passwor[dt]|passphrase|kennwort|pin)\s*[:=]\s*\S{4,}/i },
  { name: 'Zugangsdaten mit Wert', re: /\b(?:api[-_ ]?key|secret|client_secret|access[-_ ]?token|auth[-_ ]?token|zugangscode)\s*[:=]\s*\S{6,}/i },
  { name: 'GitHub-Token', re: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}\b|\bgithub_pat_[A-Za-z0-9_]{20,}\b/ },
  { name: 'Stripe-Schlüssel', re: /\b[sr]k_(?:live|test)_[A-Za-z0-9]{16,}\b/ },
  { name: 'AWS-Schlüssel', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'Slack-Token', re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  { name: 'JWT', re: /\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{10,}\b/ },
  { name: 'Privater Schlüssel', re: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
];

/* Wörter einer Datei: Buchstabenfolgen inklusive Umlaute, kleingeschrieben.
 * Bindestrichwörter zerfallen in ihre Teile, damit „X-Pulver“ das Wort X nicht
 * versteckt. */
export const woerter = (text) => new Set((text.toLowerCase().match(/[a-zäöüßıişğç]+/g) ?? []));
