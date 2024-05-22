import { fetchImageRecog } from "./fetchImageRecog.js"

const fn = Deno.args[0];
if (!fn) {
  console.log("[jpeg fn]");
  Deno.exit(1);
}
const imgbin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchImageRecog(imgbin);
console.log(res);
