import { FiAlertTriangle, FiAlertOctagon } from "react-icons/fi";

import { Alert } from "components/core";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert
      title="Browser update available"
      description="For the best experience, please update your browser."
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" w="100%" gap={2}>
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
  ),
};

const meta = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Flex maxW="md">
        <Story />
      </Flex>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
