# openai-speech

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno module and server for OpenAI's text-to-speech API, featuring a simple CLI and an interactive web interface.

## Features

-   **Multiple Voices**: 6 high-quality voices available (`alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer`).
-   **High-Definition Models**: Supports both standard (`tts-1`) and high-definition (`tts-1-hd`) models.
-   **Adjustable Speed**: Control the speech rate from 0.25x to 4.0x.
-   **Simple Interface**: Use it as a remote CLI tool, a JavaScript/TypeScript module, or a local web server.
-   **Direct MP3 Output**: Generates audio in MP3 format.

## Setup

1.  Get an API key from the [OpenAI Platform](https://platform.openai.com/account/api-keys).
2.  Set the key as an environment variable:
    ```sh
    export OPENAI_API_KEY="sk-..."
    ```
    Alternatively, create a `.env` file in the project root:
    ```
    OPENAI_API_KEY="sk-..."
    ```

## Usage

### As a Command-Line Tool

Run the CLI directly from the URL to convert text to an audio file. This command generates an `out.mp3` file in your current directory.

```sh
# Syntax: deno run -A <url> "[text]" [voice]
deno run -A https://code4fukui.github.io/openai-speech/cli.js "こんにちは、世界！" echo
```

### As a JavaScript/TypeScript Module

Import `fetchSpeech` to integrate text-to-speech into your Deno project.

```javascript
import { fetchSpeech } from "https://code4fukui.github.io/openai-speech/fetchSpeech.js";

const text = "The quick brown fox jumps over the lazy dog.";
const options = {
  voice: "nova", // "alloy", "echo", "fable", "onyx", "nova", "shimmer"
  model: "tts-1-hd",
  speed: 1.1,
};

const audioData = await fetchSpeech(text, options);
await Deno.writeFile("output.mp3", audioData);

console.log("Audio file saved as output.mp3");
```

## Web App Demo

To run the interactive web demo locally, first clone the repository.

```sh
git clone https://github.com/code4fukui/openai-speech.git
cd openai-speech
```

Then, start the server:

```sh
# Make sure your OPENAI_API_KEY is set (see Setup)
deno run -A server.js 8080
```

Now, open [http://localhost:8080](http://localhost:8080) in your browser. The interface allows you to enter text, select a voice and speed, and then play or download the generated audio.

## API Reference

The module exports a single function, `fetchSpeech`.

### `fetchSpeech(text, options)`

-   `text` (string): The text to synthesize.
-   `options` (object, optional):
    -