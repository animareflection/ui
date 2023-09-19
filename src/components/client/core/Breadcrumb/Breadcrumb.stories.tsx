import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { breadcrumbState } from "./Breadcrumb.spec";
import { Breadcrumb } from "components/client";
import Icon from "components/client/core/Icon/Icon";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      disabled
      rootBreadcrumb={{ item: "🏝️", link: "/" }}
      pathname="ethereum/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
      separator={
        <Icon
          as={ChevronRightIcon}
          color="accent.emphasized"
          aria-label="separator-icon"
          flexShrink={0}
        />
      }
    />
  ),
};

export const BreadcrumbState: Story = {
  ...Default,
  play: breadcrumbState,
  name: "[TEST] Breadcrumb State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Client/Core/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
