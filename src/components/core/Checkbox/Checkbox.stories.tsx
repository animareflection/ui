import { useState } from "react";

import { checkboxState } from "./Checkbox.spec";
import { Badge, Checkbox, Text } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Checkbox>;

const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Checkbox
      label={isChecked ? "Checked" : "Unchecked"}
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      defaultChecked
    />
  );
};

export const Controlled: Story = {
  render: () => <ControlledCheckbox />,
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap={2} maxW="xs">
      <Checkbox
        size="sm"
        label={
          <Flex justify="space-between" align="center">
            <Text color="fg.emphasized">Small</Text>
            <Badge size="sm">SM</Badge>
          </Flex>
        }
      />
      <Checkbox
        label={
          <Flex justify="space-between" align="center">
            <Text color="fg.emphasized">Medium</Text>
            <Badge>MD</Badge>
          </Flex>
        }
      />
      <Checkbox
        size="lg"
        label={
          <Flex justify="space-between" align="center">
            <Text color="fg.emphasized">Large</Text>
            <Badge size="lg">LG</Badge>
          </Flex>
        }
      />
    </Flex>
  ),
};

export const CheckboxState: Story = {
  ...Controlled,
  play: checkboxState,
  name: "[TEST] Checkbox State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Checkbox> = {
  title: "Components/Core/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Checkbox>;

export default meta;
