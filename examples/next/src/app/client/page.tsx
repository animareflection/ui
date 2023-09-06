"use client";

import { Flex, Text } from "@animareflection/ui";

import {
  AccordionDemo,
  BannerDemo,
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
    <Text mt={4}> Client component demo!</Text>
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
    <BannerDemo />
  </Flex>
);

export default ClientPage;
