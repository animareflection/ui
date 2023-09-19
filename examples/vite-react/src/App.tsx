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
  BadgeDemo,
  BannerDemo,
  BreadcrumbDemo,
  ButtonDemo,
  CardDemo,
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
  SkeletonToggleDemo,
  SliderDemo,
  SpinnerDemo,
  TabsDemo,
  ToastDemo,
  ToggleDemo,
  TooltipDemo,
} from "components";

import "main.css";

const App = () => (
  <Flex direction="column" h="100%" align="center" gap={4} py={12}>
    <Text color="brand.primary.500" fontSize="3xl" fontWeight="bold">
      Anima Reflection UI library demo
    </Text>

    <Flex gap={4}>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          width="50px"
        />
      </a>

      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          width="50px"
        />
      </a>
    </Flex>

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

    <Flex direction="column" align="center" w="100%" gap={2} p={12}>
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
      <FlyoutDemo />
      <TooltipDemo />
      <ToastDemo />
      <BreadcrumbDemo />

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

export default App;
