import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Accordion } from "components/client";

import type { AccordionItemRecord } from "components/client";

const ITEMS: AccordionItemRecord[] = [
  {
    id: "panel-1",
    value: "panel-1",
    triggerLabel: "Panel 1",
    content: "Panel 1 content",
  },
  {
    id: "panel-2",
    value: "panel-2",
    triggerLabel: "Panel 2",
    content: "Panel 2 content",
  },
  {
    id: "panel-3",
    value: "panel-3",
    triggerLabel: "Panel 3",
    content: "Panel 3 content",
  },
];

const MockAccordion = () => <Accordion items={ITEMS} />;

describe("Accordion", () => {
  it("renders accordion correctly", () => {
    render(<MockAccordion />);

    expect(screen.getByRole("button", { name: "Panel 1" })).toBeInTheDocument();
  });
});
