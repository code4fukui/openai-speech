# openai-speech

Text to speech by OpenAI.

## Usage

```sh
deno run -A https://code4fukui.github.io/openai-speech/cli.js こんにちは > speech.txt
```

```JavaScript
import { fetchSpeech } from "https://code4fukui.github.io/openai-speech/fetchSpeech.js"

const txt = "隣の客はよく柿食う客だ";
const voice = "echo"; // "alloy", "echo", "fable", "onyx", "nova", "shimmer"
const res = await fetchSpeech(txt, { voice });
console.log(res);
await Deno.writeFile("out.mp3", res);

```

## Setup

[create a secret key](https://beta.openai.com/docs/quickstart/build-your-application) on [OpenAI API](https://platform.openai.com/account/api-keys)

edit .env
```
OPENAI_API_KEY=****
```
or set the environment variables
```
export OPENAI_API_KEY=****
```

## Demo

```sh
deno run -A example.js
```

## Web App Demo

```sh
deno run -A server.js 8080
```
open http://localhost:8080/
