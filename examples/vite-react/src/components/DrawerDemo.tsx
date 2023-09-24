import { Text } from "@animareflection/ui";
import { Button, Drawer } from "@animareflection/ui/client";

import { Wrapper } from "components/core";

const DrawerDemo = () => (
  <Wrapper title="Drawer">
    <Drawer
      trigger={<Button>Open Drawer</Button>}
      title="Drawer Title"
      description="Drawer Description"
    >
      <Text mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Text>
    </Drawer>
  </Wrapper>
);

export default DrawerDemo;
