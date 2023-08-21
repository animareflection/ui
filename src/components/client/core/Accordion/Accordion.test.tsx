import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { FiChevronDown as ChevronDown } from "react-icons/fi";

import { Accordion, Icon } from "components/client";
import { Text } from "components/universal";

const items = ["panel-1", "panel-2", "panel-3"];

const MockAccordion = () => (
  <>
    {items.map((item, id) => (
      <Accordion icon={AccordionIcon} key={id} value={item} trigger={item}>
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

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen && "rotate(-180deg)",
    transition: "transform 0.4s",
    transformOrigin: "center",
  };
  return <Icon style={iconStyles} as={ChevronDown} color="white" />;
};
