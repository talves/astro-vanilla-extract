# Astro Starter: Vanilla Extract (css)

```
pnpm create astro@latest
```

```
pnpm add -D @vanilla-extract/css @vanilla-extract/vite-plugin
```

Configure Astro.

```ts
import { defineConfig } from "astro/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
