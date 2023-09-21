import { Flex } from "@animareflection/ui";
import { Icon } from "@animareflection/ui/client";
import {
  FiHeart,
  FiCheck,
  FiExternalLink,
  FiAlertTriangle,
} from "react-icons/fi";

import { Wrapper } from "components";

const IconDemo = () => (
  <Wrapper title="Icon">
    <Flex gap={2}>
      <Flex bgColor="red.100" p={2} borderRadius="md">
        <Icon color="red.500">
          <FiHeart />
        </Icon>
      </Flex>
      <Flex bgColor="blue.100" p={2} borderRadius="md">
        <Icon color="blue.500">
          <FiCheck />
        </Icon>
      </Flex>
      <Flex bgColor="gray.100" p={2} borderRadius="md">
        <Icon color="gray.500">
          <FiExternalLink />
        </Icon>
      </Flex>
      <Flex bgColor="yellow.100" p={2} borderRadius="md">
        <Icon color="yellow.500">
          <FiAlertTriangle />
        </Icon>
      </Flex>
    </Flex>
  </Wrapper>
);

export default IconDemo;
