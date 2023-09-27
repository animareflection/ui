import {
  Circle,
  Flex,
  Grid,
  Hide,
  Show,
  Square,
  Text,
} from "@animareflection/ui";

import {
  AccordionDemo,
  AlertDemo,
  BadgeDemo,
  BannerDemo,
  BreadcrumbDemo,
  ButtonDemo,
  CardDemo,
  CarouselDemo,
  CheckboxDemo,
  CollapseDemo,
  DrawerDemo,
  FlyoutDemo,
  IconDemo,
  ImageDemo,
  InputDemo,
  KbdDemo,
  MenuDemo,
  ModalDemo,
  NumberInputDemo,
  RadioGroupDemo,
  SkeletonToggleDemo,
  SliderDemo,
  SpinnerDemo,
  TabsDemo,
  TextareaDemo,
  ToastDemo,
  ToggleDemo,
  TooltipDemo,
  StatDemo,
} from "components";

const HomePage = () => (
  <Flex direction="column" h="100%" align="center" gap={4} pt={12}>
    <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
      Anima Reflection UI library demo
    </Text>

    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        width="200px"
      />
    </a>

    <Grid
      gridTemplateColumns="1fr 1fr"
      px={4}
      w="100%"
      alignItems="center"
      justifyItems="center"
    >
      <Square
        size={40}
        color="white"
        bgColor="brand.primary.500"
        fontWeight="bold"
        fontSize="2xl"
      >
        Square
      </Square>

      <Circle
        size={40}
        bgColor="brand.secondary.300"
        fontWeight="bold"
        fontSize="2xl"
      >
        Circle
      </Circle>
    </Grid>

    <Flex direction="column" w="100%" gap={2} p={4}>
      <ButtonDemo />
      <AccordionDemo />
      <DrawerDemo />
      <IconDemo />
      <MenuDemo />
      <ModalDemo />
      <SliderDemo />
      <BadgeDemo />
      <CardDemo />
      <ImageDemo />
      <SpinnerDemo />
      <TabsDemo />
      <ToggleDemo />
      <SkeletonToggleDemo />
      <CheckboxDemo />
      <KbdDemo />
      <CollapseDemo />
      <BannerDemo />
      <InputDemo />
      <NumberInputDemo />
      <TextareaDemo />
      <FlyoutDemo />
      <TooltipDemo />
      <ToastDemo />
      <CarouselDemo />
      <BreadcrumbDemo />
      <RadioGroupDemo />
      <StatDemo />
      <AlertDemo />
      <Hide below="md">
        <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
          Hide below md breakpoint
        </Text>
      </Hide>
      <Hide from="md">
        <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
          Hide from md breakpoint and up
        </Text>
      </Hide>
      <Show below="md">
        <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
          Show below md breakpoint
        </Text>
      </Show>
      <Show from="md">
        <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
          Show from md breakpoint and up
        </Text>
      </Show>
    </Flex>
  </Flex>
);

export default HomePage;
