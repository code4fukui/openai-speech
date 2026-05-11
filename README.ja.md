# openai-speech

OpenAIのText-to-Speech API用のDenoモジュールおよびサーバー。シンプルなCLIとインタラクティブなWebインターフェースを備えています。

## 機能

-   **複数の音声**: 6種類の高品質な音声が利用可能（`alloy`、`echo`、`fable`、`onyx`、`nova`、`shimmer`）。
-   **高音質モデル**: 標準モデル（`tts-1`）と高音質モデル（`tts-1-hd`）の両方をサポート。
-   **速度調整**: 音声の速度を0.25倍から4.0倍まで調整可能。
-   **シンプルなインターフェース**: リモートCLIツール、JavaScript/TypeScriptモジュール、またはローカルWebサーバーとして使用可能。
-   **MP3の直接出力**: 音声をMP3形式で生成。

## セットアップ

1.  [OpenAI Platform](https://platform.openai.com/account/api-keys)からAPIキーを取得します。
2.  キーを環境変数として設定します:
    ```sh
    export OPENAI_API_KEY="sk-..."
    ```
    または、プロジェクトのルートディレクトリに`.env`ファイルを作成します:
    ```
    OPENAI_API_KEY="sk-..."
    ```

## 使い方

### コマンドラインツールとして

URLから直接CLIを実行し、テキストを音声ファイルに変換します。このコマンドは現在のディレクトリに`out.mp3`ファイルを生成します。

```sh
# Syntax: deno run -A <url> "[text]" [voice]
deno run -A https://code4fukui.github.io/openai-speech/cli.js "こんにちは、世界！" echo
```

### JavaScript/TypeScriptモジュールとして

`fetchSpeech`をインポートして、Denoプロジェクトに音声合成（Text-to-Speech）を組み込みます。

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

## Webアプリのデモ

インタラクティブなWebデモをローカルで実行するには、まずリポジトリをクローンします。

```sh
git clone https://github.com/code4fukui/openai-speech.git
cd openai-speech
```

次に、サーバーを起動します:

```sh
# Make sure your OPENAI_API_KEY is set (see Setup)
deno run -A server.js 8080
```

ブラウザで[http://localhost:8080](http://localhost:8080)を開きます。このインターフェースでは、テキストを入力し、音声と速度を選択して、生成された音声を再生またはダウンロードできます。

## APIリファレンス

モジュールは単一の関数`fetchSpeech`をエクスポートします。

### `fetchSpeech(text, options)`

-   `text` (string): 合成するテキスト。
-   `options` (object, optional):
    -
