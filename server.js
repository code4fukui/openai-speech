import { serveWeb } from "https://code4fukui.github.io/wsutil/serveWeb.js";
import { fetchSpeech } from "./fetchSpeech.js";

serveWeb(async (param, req, path, conn) => {
  if (path == "/api/speech") {
    return await fetchSpeech(param.txt, { voice: param.voice, speed: param.speed });
  }
  return null;
});
