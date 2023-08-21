import { FiChevronDown as ChevronDown } from "react-icons/fi";

import { Accordion, Icon } from "components/client";
import { Text } from "components/universal";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const items = ["panel-1", "panel-2", "panel-3"];

export const Default: Story = {
  render: () => (
    <>
      {items.map((item, id) => (
        <Accordion icon={AccordionIcon} key={id} value={item} trigger={item}>
          <Text>{item} content</Text>
        </Accordion>
      ))}
    </>
  ),
};

export const WithContext: Story = {
  render: () => (
    <>
      {items.map((item, id) => (
        <Accordion icon={AccordionIcon} key={id} value={item} trigger={item}>
          <Text>{item} content</Text>
        </Accordion>
      ))}
    </>
  ),
};

// TODO remove explicit type annotation, required due to `pnpm` bug (and therefore Yarn with `pnpm` linker); https://github.com/microsoft/TypeScript/issues/47663
const meta: Meta<typeof Accordion> = {
  title: "Universal/Core/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Accordion>;

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen && "rotate(-180deg)",
    transition: "transform 0.4s",
    transformOrigin: "center",
  };
  return (
    <Icon
      style={iconStyles}
      as={ChevronDown}
      color={{ base: "white", _dark: "black" }}
    />
  );
};

export default meta;
