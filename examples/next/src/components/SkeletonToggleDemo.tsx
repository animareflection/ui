"use client";

import { useState } from "react";

import { Skeleton, Text } from "@animareflection/ui";
import { Button } from "@animareflection/ui/client";

import { Wrapper } from "components/core";

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
      <Button variant="ghost" p={2} onClick={() => setIsLoaded(!isLoaded)}>
        Toggle Skeleton
      </Button>
    </Wrapper>
  );
};

export default SkeletonToggleDemo;
