import { Stat, Text } from "@animareflection/ui";
import { Wrapper } from "components";
import { FiHeart } from "react-icons/fi";

const TabsDemo = () => (
  <Wrapper title="Stat">
    <Stat icon={<FiHeart data-testid="icon" />} title="Likes">
      <Text>49</Text>
    </Stat>
  </Wrapper>
);

export default TabsDemo;
