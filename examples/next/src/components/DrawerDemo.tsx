import { Button, Drawer, Text } from "@animareflection/ui";

import { Wrapper } from "components";

const DrawerDemo = () => (
  <Wrapper title="Drawer">
    <Drawer
      trigger={
        <Button variant="primary" w="fit-content">
          Open Drawer
        </Button>
      }
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
