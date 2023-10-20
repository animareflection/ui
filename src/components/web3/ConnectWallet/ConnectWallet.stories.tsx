import { BlockchainProvider } from "components/providers";
import { ConnectWallet } from "components/web3";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ConnectWallet>;

export const Default: Story = {
  render: () => <ConnectWallet />,
};

const meta = {
  title: "Components/Web3/ConnectWallet",
  component: ConnectWallet,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BlockchainProvider>
        <Story />
      </BlockchainProvider>
    ),
  ],
} satisfies Meta<typeof ConnectWallet>;

export default meta;
