import { defineConfig } from "astro/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
