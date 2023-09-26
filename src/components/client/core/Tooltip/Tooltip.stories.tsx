import { tooltipState } from "./Tooltip.spec";
import { Button, Tooltip } from "components/client";
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
    trigger={<Button minW={32}>{placement}</Button>}
    content="Tooltip Title"
  />
);

export const Default: Story = {
  render: () => (
    <Tooltip trigger={<Button>Open Tooltip</Button>} content="Tooltip Title" />
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

export const TooltipState: Story = {
  ...Default,
  play: tooltipState,
  name: "[TEST] Tooltip State",
  tags: ["test"],
};

const meta = {
  title: "Components/Client/Core/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Tooltip>;

export default meta;
