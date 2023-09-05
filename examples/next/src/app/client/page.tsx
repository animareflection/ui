"use client";

import { Flex } from "@animareflection/ui";

import {
  AccordionDemo,
  ButtonDemo,
  CheckboxDemo,
  CollapseDemo,
  DrawerDemo,
  IconDemo,
  MenuDemo,
  ModalDemo,
  SkeletonToggleDemo,
  SliderDemo,
  TabsDemo,
  ToggleDemo,
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
    <ToggleDemo />
    <SkeletonToggleDemo />
    <CheckboxDemo />
    <CollapseDemo />
  </Flex>
);

export default ClientPage;
