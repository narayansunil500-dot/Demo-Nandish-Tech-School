import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force the Netlify preset. In-Lovable builds still override to Cloudflare
// internally; local / CI builds (Netlify) use this preset.
export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  nitro: { preset: "netlify" },
});
