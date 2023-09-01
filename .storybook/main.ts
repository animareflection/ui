import path from "path";

import type { AddonOptionsBabel } from "@storybook/addon-coverage";
import type { StorybookConfig } from "@storybook/nextjs";

/**
 * Storybook configuration.
 */
const storybookConfig: StorybookConfig = {
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: [
    // NB: intentional pattern duplication (with capture group below) to ensure introduction page is loaded first
    "../src/stories/introduction.stories.mdx",
    "../src/**/*.stories.@(ts|tsx|mdx)",
  ],
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
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/*.tsx", "**/*.stories.tsx"],
        },
      } as AddonOptionsBabel,
    },
    "storybook-dark-mode",
  ],
  staticDirs: [
    "../public",
    // copy static CSS into static Storybook build
    // NB: this is a hack to get custom styles (e.g. custom fonts) rendering in the Storybook manager UI. This *does* duplicate some static CSS already in the build, but is a convenient workaround
    { from: "../src/lib/styles", to: "styles" },
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        generated: path.resolve(__dirname, "../src/generated"),
      };
    }
    return config;
  },
};

export default storybookConfig;
