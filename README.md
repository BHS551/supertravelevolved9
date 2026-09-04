# supertravelevolved9

A voice-driven travel advisor: speak a destination request, and the app
transcribes it in the browser, asks a language model for recommendations, and
illustrates each suggestion with a generated image.

React, built in early 2023 against OpenAI's completion and image APIs.

## How it works

```
microphone
   │  Web Speech API (react-speech-recognition)
   ▼
transcript ──► prompt assembled from the transcript,
   │           language selection and budget range
   ▼
generateText  ──► text completion ──► free-form prose
   │
   ▼
parseTextListToJson  ──► [ { place, description }, … ]
   │
   ▼
for each place: generateImage ──► image URL
   │
   ▼
results list with pictures
```

## Key technical decisions

**Speech recognition runs in the browser.** `react-speech-recognition` wraps the
Web Speech API, so no audio is uploaded and there is no transcription bill — the
transcript is handed over only when the user stops recording. The component
degrades explicitly when the browser has no support rather than failing
silently.

**The model's prose is parsed into structure.** The completion returns a
numbered list as text, and `parseTextListToJson` splits on line breaks, drops
lines without a `.` or `:`, strips the numbering, and splits each line into
`place` and `description`. This predates reliable structured output — coercing
free-form text into a schema was the way to render it as a list. It is also the
brittlest part of the app, and worth reading as a snapshot of what pre-JSON-mode
LLM integration looked like.

**The OpenAI client is isolated in an adapter.** `adapters/openia-adapter.js`
constructs the configured client once, and `text-generator` and
`image-generator` are the only modules that import it.

**The provider is separated from the feature.** `services/` holds the two
generation calls, `utils/` the prompt assembly, `components/` the UI — so a
change of model touches one file.

## Running it

```bash
npm install
npm start          # http://localhost:3000
```

Requires an OpenAI API key. Create `.env.local`:

```
REACT_APP_OPENAI_API_KEY=...
REACT_APP_OPENAI_ORGANIZATION_ID=...
```

Requires a browser with Web Speech API support (Chrome or Edge).

> **Security note.** A `REACT_APP_`-prefixed variable is inlined into the
> JavaScript bundle at build time, so any key configured this way is served to
> every visitor and must be treated as public. This app calls OpenAI directly
> from the browser, which was common at the time but is not safe for a deployed
> site — the call belongs behind a backend that holds the key. The repository's
> committed `.env` files should be removed and the keys in them rotated.

> **Note.** This project uses the deprecated `text-davinci-003` completion
> endpoint and the v3 OpenAI client; both need updating to run today.
