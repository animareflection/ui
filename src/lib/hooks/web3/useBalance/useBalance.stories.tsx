import { Text } from "components/core";
import { BlockchainProvider } from "components/providers";
import { Flex } from "generated/panda/jsx";
import { useBalance } from "lib/hooks/web3";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentType } from "react";

type Story = StoryObj<typeof useBalance>;

const NativeCurrencyExample = () => {
  const { formatted: balance, symbol } = useBalance({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  });

  if (!balance) return null;

  return (
    <Text mt={2}>{`Vitalik's ${symbol} balance: ${Number(balance).toFixed(
      4,
    )} ${symbol}`}</Text>
  );
};

const ERC20Example = () => {
  const { formatted: balance, symbol } = useBalance({
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    token: "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK token
  });

  if (!balance) return null;

  return (
    <Text mt={2}>{`Vitalik's ${symbol} balance: ${Number(balance).toFixed(
      4,
    )} ${symbol}`}</Text>
  );
};

export const Balances: Story = {
  render: () => (
    <Flex direction="column" gap={2}>
      <NativeCurrencyExample />
      <ERC20Example />
    </Flex>
  ),
};

const meta = {
  title: "Hooks/Web3/useBalance",
  tags: ["autodocs"],
  // NB: type coercion here to allow `useBalance` Storybook metadata to render (e.g. JSDoc, hook parameters)
  component: useBalance as unknown as ComponentType,
  decorators: [
    (Story) => (
      <BlockchainProvider>
        <Story />
      </BlockchainProvider>
    ),
  ],
} satisfies Meta<typeof useBalance>;

export default meta;
