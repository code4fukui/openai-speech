import { fetchImageRecog } from "./fetchImageRecog.js"

const fn = "image.jpg";
const imgbin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchImageRecog(imgbin);
console.log(res);
