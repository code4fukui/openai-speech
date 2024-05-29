import { getEnv } from "https://code4fukui.github.io/ai_chat/getEnv.js";
import { log } from "./log.js";

const KEY = await getEnv("OPENAI_API_KEY");

// https://platform.openai.com/docs/guides/vision

export const fetchSpeech = async (text, opt = {}) => {
  const url = "https://api.openai.com/v1/audio/speech";
  const params = {
    model: opt.model || "tts-1-hd", // "tts-1" or "tts-1-hd"
    input: opt.input || text,
    voice: opt.voice || "alloy", // `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`
    response_format: opt.response_format || "mp3",
    speed: opt.speed || 1.0, // `0.25` to `4.0`. `1.0` is the default.
  };
  const options = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Authorization": "Bearer " + KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  };
  const bin = new Uint8Array(await (await fetch(url, options)).arrayBuffer());
  await log({ size: bin?.length, text });
  return bin;
};
