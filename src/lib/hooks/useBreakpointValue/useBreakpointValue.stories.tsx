import { Text } from "components/core";
import { Box, HStack, Stack } from "generated/panda/jsx";
import { useBreakpoint, useBreakpointValue } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof useBreakpointValue>;

const BreakpointValueExample = () => {
  const color = useBreakpointValue({
    base: "red",
    sm: "blue",
    lg: "green",
  });

  const breakpoint = useBreakpoint();

  return (
    <HStack gap={4}>
      <Box
        w={40}
        h={40}
        p={4}
        textAlign="center"
        color="bg.default"
        fontWeight="bold"
        style={{ backgroundColor: color }}
      >
        Current breakpoint: {breakpoint}
      </Box>

      <Stack gap={1}>
        <Text fontWeight="bold">Box Color</Text>
        <Text color="red">[base → sm): red</Text>
        <Text color="blue">[sm → lg): blue</Text>
        <Text color="green">[lg → &#x1d461;]: green</Text>
        <Text>&#x1d461; is any breakpoint token above lg</Text>
      </Stack>
    </HStack>
  );
};

/**
 * As an example, a `Box` background color can be set based on the current breakpoint.
 */
export const Default: Story = {
  render: () => <BreakpointValueExample />,
};

const meta = {
  title: "Hooks/useBreakpointValue",
  tags: ["autodocs"],
  component: useBreakpointValue,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof useBreakpointValue>;

export default meta;
