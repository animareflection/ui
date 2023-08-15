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
  <link rel="stylesheet" href="../src/lib/styles/main.css" />
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
  ],
  staticDirs: ["../public"],
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
