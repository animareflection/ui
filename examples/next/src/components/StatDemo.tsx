import { Stat } from "@animareflection/ui";
import { Wrapper } from "components";

const TabsDemo = () => (
  <Wrapper title="Stat">
    <Stat
      label="Floor Price"
      helpText="12.35%"
      indicator="increase"
      value="$10.85"
    />
  </Wrapper>
);

export default TabsDemo;
