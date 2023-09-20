"use client";

import { Flex, Text } from "@animareflection/ui";

import {
  AccordionDemo,
  BannerDemo,
  ButtonDemo,
  CarouselDemo,
  CheckboxDemo,
  CollapseDemo,
  DrawerDemo,
  FlyoutDemo,
  IconDemo,
  InputDemo,
  MenuDemo,
  ModalDemo,
  NumberInputDemo,
  SkeletonToggleDemo,
  SliderDemo,
  TabsDemo,
  ToastDemo,
  ToggleDemo,
  TooltipDemo,
} from "components";

const ClientPage = () => (
  <Flex direction="column" align="center" w="100%" gap={2} p={12}>
    <Text>Client component demo!</Text>
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
    <InputDemo />
    <NumberInputDemo />
    <FlyoutDemo />
    <TooltipDemo />
    <ToastDemo />
    <CarouselDemo />
  </Flex>
);

export default ClientPage;
