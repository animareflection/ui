import { Button } from "components/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/client/core/Accordion/AccordionDemo";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof meta>;

const items = [
  {
    trigger: "Anima Reflection (ANIREF)",
    content:
      "To provide platforms for people to share their ideas and connect with others.",
  },
  {
    trigger: "Mirage Swap",
    content:
      "MirageSwap is a multichain, gas-efficient automated market maker for ERC-721s that aggregates liquidity across the NFT ecosystem",
  },
  {
    trigger: "ANIREF Design System & UI Kit",
    content:
      "Universal design system and component library for Anima Reflection, powered by Panda and Ark.",
  },
];

export const Default: Story = {
  render: () => (
    <Accordion collapsible>
      {items.map((item, id) => (
        <AccordionItem key={id} value={item.trigger}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger asChild>
                <Button
                  w="100%"
                  justifyContent="space-between"
                  display="flex"
                  alignItems="center"
                >
                  {item.trigger}
                  <AccordionIcon isOpen={isOpen} />
                </Button>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
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

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      style={iconStyles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
