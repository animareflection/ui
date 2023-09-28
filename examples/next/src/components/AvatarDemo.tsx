"use client";

import { useState } from "react";

import { Avatar, Button, Flex } from "@animareflection/ui";

import { Wrapper } from "components";

const AvatarToggleDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper title="Avatar">
      <Flex direction="column" gap={2}>
        {isLoaded ? (
          <Avatar src="/img/logo.png" alt="avatar" />
        ) : (
          <Avatar src="" alt="" />
        )}
        <Button
          data-testid="toggle"
          variant="ghost"
          p={2}
          onClick={() => setIsLoaded(!isLoaded)}
        >
          {isLoaded ? "Toggle to fallback" : "Toggle to image"}
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default AvatarToggleDemo;
