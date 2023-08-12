import { Accordion, Button } from "components/client";
import { Text } from "components/universal";
import { FiChevronDown as ChevronDown } from "react-icons/fi";
import Icon from "../Icon/Icon";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const items = ["panel-1", "panel-2", "panel-3"];

export const Default: Story = {
  render: () => (
    <>
      {items.map((item, id) => (
        <Accordion
          key={id}
          value={item}
          trigger={
            <Button>
              {item} <Icon as={ChevronDown} color="white" />
            </Button>
          }
        >
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

export default meta;

// const AccordionIcon = (props: { isOpen: boolean }) => {
//   const iconStyles = {
//     transform: props.isOpen ? "rotate(-180deg)" : undefined,
//     transition: "transform 0.2s",
//     transformOrigin: "center",
//   };
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       height="16"
//       width="16"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       style={iconStyles}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );
// };
