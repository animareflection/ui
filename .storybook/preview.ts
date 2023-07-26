import "../src/lib/styles/main.css";

import type { Preview } from "@storybook/react";

/**
 * Storybook preview.
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
