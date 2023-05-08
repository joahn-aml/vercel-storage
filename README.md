# Vercel Storage Demo

A small [Vercel Storage](https://vercel.com/blog/vercel-storage) demo application.

## Technologies used

Some of the technologies used in this project.

- Vercel Storage
- Vercel Hosting
- SvelteKit

## Environment variables

The required environment variables needed. (With values removed obviously.)

```
# Vercel KV
KV_URL=""
KV_REST_API_URL=""
KV_REST_API_TOKEN=""
KV_REST_API_READ_ONLY_TOKEN=""

# JWT
JWT_KEY=""
```

In development you can can either add the deelopment environment variables manually to an `.env` file. Or you can pull variables with the [Vercel CLI](https://vercel.com/docs/cli/env).

In production the environment variables stored in your [Vercel project](https://vercel.com/docs/concepts/projects/environment-variables) will be used.

## Developing

Clone the project and install dependencies with `npm install` (or `pnpm install` or `yarn`).

Then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Demo

[https://vercel-storage-orpin.vercel.app/](https://vercel-storage-orpin.vercel.app/)
