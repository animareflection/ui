"use client";

import { Button } from "@animareflection/ui";

import { Wrapper } from "components";

const ButtonDemo = () => (
  <Wrapper title="Button">
    <Button
      w="fit-content"
      variant="primary"
      onClick={() => console.log("Clicked!")}
    >
      Click me
    </Button>
  </Wrapper>
);

export default ButtonDemo;
