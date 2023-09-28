import { fetchAudioRecog } from "./fetchAudioRecog.js"

const fn = Deno.args[0];
if (!fn) {
  console.log("[sound fn]");
  Deno.exit(1);
}
const mp3bin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchAudioRecog(mp3bin);
console.log(res);
