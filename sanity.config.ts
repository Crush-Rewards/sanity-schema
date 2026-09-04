// Dev-only Studio config so `sanity schema extract` can produce schema.json.
// It is not a deployable Studio (no plugins, no structure); the real Studio
// lives in Crush-Rewards/sanity-studio and imports `schemaTypes` from here.
import { defineConfig } from "sanity";
import { allTypes } from "./src/index.js";

export default defineConfig({
  name: "schema-extract",
  title: "Schema extract",
  projectId: "sl9izhcz",
  dataset: "production",
  schema: { types: allTypes },
});
