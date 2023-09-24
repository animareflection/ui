import { Button } from "@animareflection/ui/client";

import { Wrapper } from "components/core";

const ButtonDemo = () => (
  <Wrapper title="Button">
    <Button w="fit-content" onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  </Wrapper>
);

export default ButtonDemo;
