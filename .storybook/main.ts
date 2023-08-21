import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import type { StorybookConfig } from "@storybook/react-vite";

/**
 * Storybook configuration.
 */
const storybookConfig: StorybookConfig = {
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  // inject CSS into Storybook UI
  managerHead: (head) => `
  ${head}
  <link rel="stylesheet" href=${
    process.env.NODE_ENV === "production"
      ? "./styles/main.css"
      : "../src/lib/styles/main.css"
  } />
`,
  typescript: {
    // typecheck stories during Storybook build
    check: true,
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  staticDirs: [
    "../public",
    // copy static CSS into static Storybook build
    // NB: this is a hack to get custom styles (e.g. custom fonts) rendering in the Storybook manager UI. This *does* duplicate some static CSS already in the build, but is a convenient workaround
    { from: "../src/lib/styles", to: "styles" },
  ],
  viteFinal: (config) =>
    // recursively merge Vite options
    mergeConfig(config, {
      plugins: [tsconfigPaths()],
      // dependencies to pre-optimize
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    }),
};

export default storybookConfig;
