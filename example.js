import { fetchSpeech } from "./fetchSpeech.js"

const txt = "隣の客はよく柿食う客だ";
const voice = "echo"; // "alloy", "echo", "fable", "onyx", "nova", "shimmer"
const res = await fetchSpeech(txt, { voice });
console.log(res);
await Deno.writeFile("out.mp3", res);
