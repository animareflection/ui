import { Flyout, Text } from "@animareflection/ui";

import { Wrapper } from "components";

const FlyoutDemo = () => {
  return (
    <Wrapper title="Flyout">
      <Flyout
        title="Flyout Title"
        trigger={<Text color="bg.default">Open Flyout</Text>}
      >
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
