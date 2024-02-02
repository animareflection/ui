import { Alert, Flex } from "@animareflection/ui";
import { FiAlertOctagon, FiAlertTriangle } from "react-icons/fi";

import { Wrapper } from "components";

const AlertDemo = () => (
  <Wrapper title="Alert">
    <Flex direction="column" maxW="md" gap={2}>
      <Alert
        title="Default alert"
        description="Description of default alert."
      />
      <Alert
        icon={<FiAlertTriangle />}
        title="Warning alert"
        description="Description of warning alert."
        variant="warning"
      />
      <Alert
        icon={<FiAlertOctagon />}
        title="Error alert"
        description="Description of error alert."
        variant="error"
      />
    </Flex>
  </Wrapper>
);

export default AlertDemo;
