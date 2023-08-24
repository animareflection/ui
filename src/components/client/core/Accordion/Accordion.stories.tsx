import { Accordion } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const ITEMS = ["panel-1", "panel-2", "panel-3"];

export const Default: Story = {
  render: () => (
    <>
      {ITEMS.map((item, id) => (
        <Accordion key={id} value={item} trigger={item}>
          <Text>{item} content</Text>
        </Accordion>
      ))}
    </>
  ),
};

export const WithContext: Story = {
  render: () => (
    <>
      {ITEMS.map((item, id) => (
        <Accordion key={id} value={item} trigger={item}>
          <Text>{item} content</Text>
        </Accordion>
      ))}
    </>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Accordion> = {
  title: "Components/Client/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Accordion>;

export default meta;
