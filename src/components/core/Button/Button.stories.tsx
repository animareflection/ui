import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // NB: `render` instead of `args` is a workaround here, since Panda can't detect the need to recompile if story args are set. This has the drawback of less interactivity in corresponding stories (e.g. lack of an interactive Storybook colorpicker for the `color` prop). See https://github.com/chakra-ui/panda/issues/1057
  render: () => <Button>Click me 🏝️</Button>,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
