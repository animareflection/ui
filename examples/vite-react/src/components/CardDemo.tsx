import { Card, CardBody, CardFooter, CardHeader } from "@animareflection/ui";

import { Wrapper } from "components/core";

const CardDemo = () => (
  <Wrapper title="Card">
    <Card maxW="sm">
      <CardHeader>Card Header</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  </Wrapper>
);

export default CardDemo;
