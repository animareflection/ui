import { Text } from "components/universal";
import { panda } from "generated/panda/jsx";
import { token } from "generated/panda/tokens";
import { useBreakpoint } from "lib/hooks";

import type { Meta, StoryObj } from "@storybook/react";
import type { UseBreakpointOptions } from "lib/hooks";

type Story = StoryObj<typeof useBreakpoint>;

// TODO add viewport-based client stories (can use https://storybook.js.org/docs/react/essentials/viewport); https://trello.com/c/6cKY4EDk/201-hook-tests

// TODO add custom fallback story with mocked undefined window to simulate server environment; https://trello.com/c/6cKY4EDk/201-hook-tests
/**
 * The "base" breakpoint is used as a fallback by default. This can be overridden by setting `fallback`.
 */
// export const WithCustomFallback: Story = { ... };

const BreakpointExample = ({ fallback }: UseBreakpointOptions) => {
  const breakpoint = useBreakpoint({ fallback });

  return (
    <Text>
      <panda.span fontWeight="bold">Current breakpoint:</panda.span>{" "}
      {breakpoint} ({token(`breakpoints.${breakpoint}`)})
    </Text>
  );
};

export const Default: Story = {
  render: () => <BreakpointExample />,
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof useBreakpoint> = {
  title: "Hooks/useBreakpoint",
  tags: ["autodocs"],
  component: useBreakpoint,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof useBreakpoint>;

export default meta;
