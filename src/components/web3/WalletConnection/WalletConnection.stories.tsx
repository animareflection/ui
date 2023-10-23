import { useAccount } from "wagmi";

import { Toaster } from "components/core";
import { BlockchainProvider } from "components/providers";
import { ConnectWallet, DisconnectWallet } from "components/web3";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ConnectWallet | typeof DisconnectWallet>;

const Connection = () => {
  const { isConnected } = useAccount();

  if (isConnected) return <DisconnectWallet />;

  return <ConnectWallet />;
};

export const Default: Story = {
  render: () => <Connection />,
};

const meta = {
  title: "Components/Web3/WalletConnection",
  component: ConnectWallet || DisconnectWallet,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BlockchainProvider>
        <Story />
        <Toaster />
      </BlockchainProvider>
    ),
  ],
} satisfies Meta<typeof ConnectWallet | typeof DisconnectWallet>;

export default meta;
