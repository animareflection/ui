import { Button, Skeleton, Text } from "@animareflection/ui";
import { useState } from "react";

import { Wrapper } from "components";

const SkeletonToggleDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper title="Skeleton">
      <Skeleton isLoaded={isLoaded} w="fit-content">
        <Text maxW="sm" mt={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </Skeleton>
      <Button
        w="fit-content"
        variant="ghost"
        p={2}
        onClick={() => setIsLoaded(!isLoaded)}
      >
        Toggle Skeleton
      </Button>
    </Wrapper>
  );
};

export default SkeletonToggleDemo;
