import { fetchImageRecog } from "./fetchImageRecog.js"

const fn = Deno.args[0];
const q = Deno.args[1];
if (!fn) {
  console.log("[jpeg fn] (q text)");
  Deno.exit(1);
}
const imgbin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchImageRecog(imgbin, q);
console.log(res);
