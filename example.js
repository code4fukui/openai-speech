import { fetchAudioRecog } from "./fetchAudioRecog.js"

const fn = "audio.mp3";
const mp3bin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchAudioRecog(mp3bin);
console.log(res);
