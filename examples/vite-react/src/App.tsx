import { Circle, Flex, Grid, Square, Text } from "@animareflection/ui";

import "./main.css";

const App = () => (
  <Flex
    gradientFrom="white"
    gradientTo="brand.primary.100"
    bgGradient="to-b"
    direction="column"
    h="100%"
    align="center"
    gap={4}
    pt={12}
  >
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
  </Flex>
);

export default App;
