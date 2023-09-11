import { Button, Tooltip } from "@animareflection/ui/client";

import { Wrapper } from "components";

const FlyoutDemo = () => {
  return (
    <Wrapper title="Tooltip">
      <Tooltip
        positioning={{
          placement: "top",
        }}
        trigger={<Button>Open Tooltip</Button>}
        content="Tooltip Title"
      />
    </Wrapper>
  );
};

export default FlyoutDemo;
