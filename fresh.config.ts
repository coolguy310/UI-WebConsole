import twindPlugin from "$fresh/plugins/twind.ts"
import { defineConfig } from "$fresh/server.ts"

import twindConfig from "./twind.config.ts"

export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
  hostname: Deno.env.get("HOSTNAME") || "0.0.0.0",
  port: Number(Deno.env.get("PORT")) || 8000,
})
