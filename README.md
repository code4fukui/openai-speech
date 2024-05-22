# openai-imagerecog

Image recognization by OpenAI.

## Usage

```sh
deno run -A https://code4fukui.github.io/openai-imagerecog/cli.js image.jpg > image.txt
```

```JavaScript
import { fetchImageRecog } from "https://code4fukui.github.io/openai-imagerecog/fetchImageRecog.js"

const fn = "image.jpg";
const imgbin = new Uint8Array(await Deno.readFile(fn));
const res = await fetchImageRecog(imgbin);
console.log(res);
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
