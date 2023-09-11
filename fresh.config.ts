import twindPlugin from "$fresh/plugins/twind.ts";
import { defineConfig } from "$fresh/server.ts";

import twindConfig from "./twind.config.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";
const env = await load();
const IsDev = env["DENO_ENV"] === "development";
export default defineConfig({
  plugins: [twindPlugin(twindConfig)],
  hostname: env["HOSTNAME"] || "0.0.0.0",
  port: Number(env["PORT"]) || 8000,
  cert: IsDev ? await Deno.readTextFile(".cert/cert.pem") : undefined,
  key: IsDev ? await Deno.readTextFile(".cert/key.pem") : undefined,
});
