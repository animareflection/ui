import { Card, CardHeader, CardBody, CardFooter } from "components/core";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card maxW="sm">
      <CardHeader>Card Header</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Card> = {
  title: "Components/Universal/Core/Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Card>;

export default meta;
