import { FiChevronRight as ChevronRightIcon } from "react-icons/fi";

import { breadcrumbState } from "./Breadcrumb.spec";
import { Breadcrumb } from "components/core";
import Icon from "components/core/Icon/Icon";

import type { BreadcrumbRecord } from "./Breadcrumb";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const BREADCRUMBS: BreadcrumbRecord[] = [
  { label: "Home", href: "#" },
  { label: "Apparel", href: "#" },
  { label: "Casual", href: "#" },
  { label: "Topwear", href: "#" },
  { label: "Shirts", href: "#" },
];

export const Pathname: Story = {
  render: () => (
    <Breadcrumb
      rootLabel="🏝️"
      pathname="ethereum/collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
      separator={
        <Icon color="accent.emphasized" aria-label="separator-icon">
          <ChevronRightIcon />
        </Icon>
      }
    />
  ),
};

export const Breadcrumbs: Story = {
  render: () => (
    <Breadcrumb
      breadcrumbs={BREADCRUMBS}
      separator={
        <Icon color="accent.emphasized" aria-label="separator-icon">
          <ChevronRightIcon />
        </Icon>
      }
    />
  ),
};

export const BreadcrumbState: Story = {
  ...Pathname,
  play: breadcrumbState,
  name: "[TEST] Breadcrumb State",
  tags: ["test"],
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Breadcrumb> = {
  title: "components/Core/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
