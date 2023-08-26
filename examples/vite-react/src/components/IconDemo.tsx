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
        <Icon as={FiHeart} color="red.500" />
      </Flex>
      <Flex bgColor="blue.100" p={2} borderRadius="md">
        <Icon as={FiCheck} color="blue.500" />
      </Flex>
      <Flex bgColor="gray.100" p={2} borderRadius="md">
        <Icon as={FiExternalLink} color="gray.500" />
      </Flex>
      <Flex bgColor="yellow.100" p={2} borderRadius="md">
        <Icon as={FiAlertTriangle} color="yellow.500" />
      </Flex>
    </Flex>
  </Wrapper>
);

export default IconDemo;
