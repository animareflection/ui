import { Accordion } from "@animareflection/ui";

import { Wrapper } from "components";

import type { AccordionItemRecord } from "@animareflection/ui";

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

const AccordionDemo = () => (
  <Wrapper title="Accordion">
    <Accordion items={ITEMS} />
  </Wrapper>
);

export default AccordionDemo;
