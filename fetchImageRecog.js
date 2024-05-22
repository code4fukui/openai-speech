import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

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

// https://platform.openai.com/docs/guides/vision

export const fetchImageRecog = async (imgbin, q = "この画像は何ですか") => {
  const url = "https://api.openai.com/v1/chat/completions";
  const params = {
    model: "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": q,
          },
          {
            "type": "image_url",
            "image_url": {
              "url": `data:image/jpeg;base64,${Base64.encode(imgbin)}`
            }
          }
        ]
      }
    ],
    "max_tokens": 300
  };
  const form = new FormData();
  for (const name in params) {
    form.set(name, params[name]);
  }

  //const { headers, body } = await FormDataEncoder.encode(form);
  const opt = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Authorization": "Bearer " + KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
  //console.log(opt);
  //Deno.exit();

  const res = await (await fetch(url, opt)).json();
  const text = res?.choices[0]?.message?.content;
  if (!text) {
    throw new Error(res);
  }
  await log({ imagesize: imgbin.length, text });
  return text;
};
