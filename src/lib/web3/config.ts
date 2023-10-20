import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

import { MAINNET_RPC_URL, SEPOLIA_RPC_URL } from "lib/config";

const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected({ shimDisconnect: true })],
  transports: {
    [mainnet.id]: http(MAINNET_RPC_URL),
    [sepolia.id]: http(SEPOLIA_RPC_URL),
  },
});

export default config;
