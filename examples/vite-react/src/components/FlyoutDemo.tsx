import { Text } from "@animareflection/ui";
import { Button, Flyout } from "@animareflection/ui/client";

import { Wrapper } from "components";

const FlyoutDemo = () => {
  return (
    <Wrapper title="Flyout">
      <Flyout title="Flyout Title" trigger={<Button>Open Flyout</Button>}>
        <Text mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </Flyout>
    </Wrapper>
  );
};

export default FlyoutDemo;
