import { useAccount } from "wagmi";

import { Toaster } from "components/core";
import { BlockchainProvider } from "components/providers";
import {
  ConnectWallet,
  DisconnectWallet,
  SwitchNetwork,
} from "components/web3";
import { Flex } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Connection>;

const Connection = ({
  showNetworkMenu = false,
}: {
  showNetworkMenu?: boolean;
}) => {
  const { isConnected } = useAccount();

  if (isConnected)
    return (
      <Flex gap={2}>
        <DisconnectWallet />
        {showNetworkMenu && <SwitchNetwork />}
      </Flex>
    );

  return <ConnectWallet />;
};

export const Default: Story = {
  render: () => <Connection />,
};

export const WithNetworkMenu: Story = {
  render: () => <Connection showNetworkMenu />,
};

const meta = {
  title: "Components/Web3/WalletConnection",
  component: Connection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BlockchainProvider>
        <Story />
        <Toaster />
      </BlockchainProvider>
    ),
  ],
  // TODO: remove when portal issue / ref bug is fixed
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Connection>;

export default meta;
