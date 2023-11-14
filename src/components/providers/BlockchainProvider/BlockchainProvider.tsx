import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { WagmiConfig } from "lib/web3";

import type { ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const BlockchainProvider = ({ children }: Props) => {
  return (
    <WagmiProvider config={WagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default BlockchainProvider;
