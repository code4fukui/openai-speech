import { DateTime } from "https://js.sabae.cc/DateTime.js";

let allowlog = true;
try {
  await Deno.mkdir("log", { recursive: true });
} catch (e) {
  allowlog = false;
}
export const log = async (opt) => { // opt: object
  if (allowlog) {
    const dt = new DateTime();
    const data = { dt, ...opt };
    await Deno.writeTextFile("log/" + dt.day.toString() + ".ndjson", JSON.stringify(data) + "\n", { append: true });
  }
};
