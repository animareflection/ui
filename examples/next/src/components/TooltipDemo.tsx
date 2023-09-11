import { Button, Tooltip } from "@animareflection/ui/client";

import { Wrapper } from "components";

const FlyoutDemo = () => {
  return (
    <Wrapper title="Tooltip">
      <Tooltip
        positioning={{
          placement: "top",
        }}
        openDelay={0}
        closeDelay={0}
        trigger={<Button>Open Tooltip</Button>}
        content="Tooltip Title"
      />
    </Wrapper>
  );
};

export default FlyoutDemo;
