import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { Breadcrumb } from "components/client";
import Icon from "components/client/core/Icon/Icon";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const pathname =
  "https://mirageswap-app.vercel.app/ethereum/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
const baseUrl = "🏝️";
const seperatorIcon = <Icon as={ChevronRightIcon} color="accent.emphasized" />;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      address={pathname}
      baseUrl={baseUrl}
      SeparatorIcon={seperatorIcon}
    />
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Client/Core/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
