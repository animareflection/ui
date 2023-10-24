import {
  arbitrum,
  goerli,
  localhost,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";

import type { Chain } from "wagmi/chains";

interface Network extends Chain {
  /** Network icon. */
  icon: string;
}

export const NETWORKS: Network[] = [
  {
    ...mainnet,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    ...polygon,
    icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  },
  {
    ...arbitrum,
    name: "Arbitrum",
    icon: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
  },
  {
    ...optimism,
    name: "Optimism",
    icon: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg",
  },
  {
    ...goerli,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
  {
    ...localhost,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  },
];
