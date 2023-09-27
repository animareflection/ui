"use client";

import { Flex, Text } from "@animareflection/ui";

import {
  AccordionDemo,
  BannerDemo,
  BreadcrumbDemo,
  ButtonDemo,
  CarouselDemo,
  CheckboxDemo,
  CollapseDemo,
  DatePickerDemo,
  DrawerDemo,
  FlyoutDemo,
  IconDemo,
  InputDemo,
  MenuDemo,
  ModalDemo,
  NumberInputDemo,
  RadioGroupDemo,
  SkeletonToggleDemo,
  SliderDemo,
  TabsDemo,
  TextareaDemo,
  ToastDemo,
  ToggleDemo,
  TooltipDemo,
} from "components";

const ClientPage = () => (
  <Flex direction="column" align="center" w="100%" gap={2} p={12}>
    <Text>Client component demo!</Text>
    <ButtonDemo />
    <AccordionDemo />
    <DatePickerDemo />
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
    <TextareaDemo />
    <FlyoutDemo />
    <TooltipDemo />
    <BreadcrumbDemo />
    <ToastDemo />
    <CarouselDemo />
    <RadioGroupDemo />
  </Flex>
);

export default ClientPage;
