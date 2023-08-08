"use client";

import { Stack } from "@animareflection/ui";
import { Button } from "@animareflection/ui/client";

const ClientPage = () => (
  <Stack w="fit-content" p={12}>
    Client component demo!
    <Button onClick={() => console.log("Clicked!")}>Click me</Button>
  </Stack>
);

export default ClientPage;
