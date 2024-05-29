import { fetchSpeech } from "./fetchSpeech.js"

const text = Deno.args[0];
const voice = Deno.args[1];
if (!text) {
  console.log("[text] (voice)");
  Deno.exit(1);
}
const mp3bin = await fetchSpeech(text, { voice });
await Deno.writeFile("out.mp3", mp3bin);
