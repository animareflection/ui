import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Accordion } from "components/client";
import { Text } from "components/universal";

const ITEMS = ["panel-1", "panel-2", "panel-3"];

const MockAccordion = () => (
  <>
    {ITEMS.map((item, id) => (
      <Accordion key={id} value={item} trigger={item}>
        <Text>{item} content</Text>
      </Accordion>
    ))}
  </>
);

describe("Accordion", () => {
  it("renders accordion correctly", () => {
    render(<MockAccordion />);

    expect(screen.getByRole("button", { name: "panel-1" })).toBeInTheDocument();
  });
});
