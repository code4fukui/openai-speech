import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { FormDataEncoder } from "https://code4fukui.github.io/form-data-encoder/FormDataEncoder.js";

const KEY = await getEnv("OPENAI_API_KEY");

let allowlog = true;
try {
  await Deno.mkdir("log", { recursive: true });
} catch (e) {
  allowlog = false;
}
const log = async (opt) => { // opt: object
  if (allowlog) {
    const dt = new DateTime();
    const data = { dt, ...opt };
    await Deno.writeTextFile("log/" + dt.day.toString() + ".ndjson", JSON.stringify(data) + "\n");
  }
};

// https://platform.openai.com/docs/api-reference/chat/create

export const fetchAudioRecog = async (mp3bin) => {
  const fn = "audio.mp3";
  const url = "https://api.openai.com/v1/audio/transcriptions";
  const params = {
    model: "whisper-1",
    language: "ja",
  };
  const form = new FormData();
  for (const name in params) {
    form.set(name, params[name]);
  }
  form.set("file", new Blob([mp3bin], { type: "audio/mpeg" }), fn);

  const { headers, body } = await FormDataEncoder.encode(form);
  const opt = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Authorization": "Bearer " + KEY,
      ... headers,
    },
    body,
  };
  //console.log(opt);
  const res = await (await fetch(url, opt)).json();
  // console.log(res);
  const text = res.text;
  await log({ audiosize: mp3bin.length, text });
  return text;
};
