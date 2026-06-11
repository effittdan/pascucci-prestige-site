// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Explicitly target Netlify. Without this, the wrapper skips the Nitro deploy
  // plugin on Netlify's build (it only auto-runs inside a Lovable sandbox) and
  // otherwise defaults to a Cloudflare target — both leave the SSR site with no
  // server handler, so every route returns "Page not found". The `netlify` preset
  // emits the SSR function to .netlify/functions-internal plus the `/*` redirect.
  nitro: { preset: "netlify" },
});
