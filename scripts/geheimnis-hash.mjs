/* Gibt die Wortprüfsumme für ein Wort aus — für den Eintrag in
 * scripts/geheimnisse.mjs. Das Wort wird nirgends gespeichert; es geht nur
 * durch diesen Aufruf. Aufruf: npm run geheimnis -- <wort> */
import { hashWort } from './geheimnisse.mjs';

const wort = process.argv[2];
if (!wort) {
  console.log('Aufruf: npm run geheimnis -- <wort>   (gibt nur die Prüfsumme aus)');
  process.exit(1);
}
console.log(hashWort(wort));
