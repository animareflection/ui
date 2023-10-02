import { tooltipState } from "./Tooltip.spec";
import { Text, Tooltip } from "components/core";
import { Flex, Grid } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Tooltip>;

type Placement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

const TooltipTemplate = ({ placement }: { placement: Placement }) => (
  <Tooltip
    positioning={{
      placement: placement,
    }}
    trigger={
      <Text
        minW={32}
        bgColor="brand.primary.500"
        p={3}
        textAlign="center"
        borderRadius="md"
        fontWeight="bold"
      >
        {placement}
      </Text>
    }
    content="Tooltip Title"
  />
);

export const Default: Story = {
  render: () => (
    <Tooltip
      trigger={<Text fontWeight="bold">Tooltip</Text>}
      content="Tooltip Title"
    />
  ),
};

export const Placement: Story = {
  render: () => (
    <Flex h="screen" w="full" justify="center" align="center">
      <Grid columns={{ base: 2, sm: 3 }} justifyContent="center">
        <TooltipTemplate placement="bottom-start" />
        <TooltipTemplate placement="bottom" />
        <TooltipTemplate placement="bottom-end" />
        <TooltipTemplate placement="left-start" />
        <TooltipTemplate placement="left" />
        <TooltipTemplate placement="left-end" />
        <TooltipTemplate placement="right-start" />
        <TooltipTemplate placement="right" />
        <TooltipTemplate placement="right-end" />
        <TooltipTemplate placement="top-start" />
        <TooltipTemplate placement="top" />
        <TooltipTemplate placement="top-end" />
      </Grid>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Tooltip
      trigger={<Text fontWeight="bold">Rounded</Text>}
      content="Tooltip Title"
      variant="rounded"
    />
  ),
};

export const TooltipState: Story = {
  ...Default,
  play: tooltipState,
  name: "[TEST] Tooltip State",
  tags: ["test"],
};

// NB: type annotation resolves type portability error
const meta: Meta = {
  title: "Components/Core/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
  // TODO: remove when portal issue / ref bug is fixed
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
