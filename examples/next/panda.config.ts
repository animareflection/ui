import { anirefPreset } from "@animareflection/ui";
import { defineConfig } from "@pandacss/dev";

/**
 * Panda configuration.
 *
 * @see https://panda-css.com/docs/references/config
 */
const pandaConfig = defineConfig({
  preflight: true,
  presets: ["@pandacss/dev/presets", anirefPreset],
  include: ["src/**/*.{ts,tsx}"],
  outdir: "src/generated/panda",
});

export default pandaConfig;
