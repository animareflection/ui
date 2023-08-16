import "../src/lib/styles/main.css";

import type { Preview } from "@storybook/react";

/**
 * Storybook preview.
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#161616" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      default: true,
      classTarget: "html",
      stylePreview: true,
    },
  },
};

export default preview;
