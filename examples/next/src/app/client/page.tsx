"use client";

import { Flex } from "@animareflection/ui";

import {
  AccordionDemo,
  ButtonDemo,
  DrawerDemo,
  IconDemo,
  MenuDemo,
  ModalDemo,
  SliderDemo,
  TabsDemo,
} from "components";

const ClientPage = () => (
  <Flex direction="column" align="center" w="100%" gap={2} p={12}>
    Client component demo!
    <ButtonDemo />
    <AccordionDemo />
    <DrawerDemo />
    <IconDemo />
    <MenuDemo />
    <ModalDemo />
    <SliderDemo />
    <TabsDemo />
  </Flex>
);

export default ClientPage;
