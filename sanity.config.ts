// Dev-only Studio config so `sanity schema extract` can produce schema.json.
// It is not a deployable Studio (no plugins, no structure); the real Studio
// lives in Crush-Rewards/sanity-studio and imports `schemaTypes` from here.
import { defineConfig } from "sanity";
// Imports the built package (run `pnpm build` first; `pnpm check` does) so the
// extracted schema.json is exactly what consumers install.
import { allTypes } from "./dist/index.js";

export default defineConfig({
  name: "schema-extract",
  title: "Schema extract",
  projectId: "sl9izhcz",
  dataset: "production",
  schema: { types: allTypes },
});
