import {
  Box,
  Circle,
  Flex,
  Grid,
  Hide,
  Show,
  Skeleton,
  Square,
  Text,
} from "@animareflection/ui";
import Link from "next/link";

import {
  BadgeDemo,
  CardDemo,
  ImageDemo,
  KbdDemo,
  SpinnerDemo,
} from "components/core";

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
      <BadgeDemo />
      <CardDemo />
      <ImageDemo />
      <SpinnerDemo />
      <KbdDemo />
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
      <Skeleton variant="circle" w={12} h={12} />
    </Flex>

    <Box color="blue" _hover={{ textDecoration: "underline" }}>
      <Link href="/client">Go to client page demo</Link>
    </Box>
  </Flex>
);

export default HomePage;
