import { FiChevronDown } from "react-icons/fi";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import Image from "components/core/Image/Image";
import Menu from "components/core/Menu/Menu";
import { Flex } from "generated/panda/jsx";
import { NETWORKS } from "lib/web3";

import type { Props as MenuProps } from "components/core/Menu/Menu";

export interface Props extends MenuProps {}

const SwitchNetwork = ({ ...props }: Props) => {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

  const currentNetworkIcon = NETWORKS.find((network) => network.id === chainId)
      ?.icon,
    currentNetworkName = NETWORKS.find((network) => network.id === chainId)
      ?.name;

  if (!isConnected) return null;

  return (
    <Menu
      trigger={
        <Button variant="secondary" gap={1}>
          <Image
            src={currentNetworkIcon}
            alt={currentNetworkName}
            h={4}
            w={4}
          />
          {currentNetworkName}
          <Icon h={4} w={4}>
            <FiChevronDown />
          </Icon>
        </Button>
      }
      groups={[
        {
          id: "networks",
          items: chains.map(({ id, name }) => ({
            id: id.toString(),
            child: (
              <Flex
                key={id}
                id={id.toString()}
                gap={2}
                onClick={() => switchChain({ chainId: id })}
              >
                <Image
                  src={NETWORKS.find((network) => network.id === id)?.icon}
                  alt={`${name} icon`}
                  w={5}
                  h={5}
                  style={{ objectFit: "contain" }}
                />
                {NETWORKS.find((network) => network.id === id)?.name}
              </Flex>
            ),
          })),
        },
      ]}
      {...props}
    />
  );
};

export default SwitchNetwork;
