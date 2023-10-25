import { useEffect } from "react";
import { default as toast } from "react-hot-toast";
import { FiClipboard, FiLogOut } from "react-icons/fi";
import { normalize } from "viem/ens";
import {
  useAccount,
  useBalance,
  useChainId,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

import Badge from "components/core/Badge/Badge";
import Button from "components/core/Button/Button";
import Icon from "components/core/Icon/Icon";
import Image from "components/core/Image/Image";
import Modal from "components/core/Modal/Modal";
import Text from "components/core/Text/Text";
import Toast from "components/core/Toast/Toast";
import { Circle, Flex, panda } from "generated/panda/jsx";
import { useCopyToClipboard, useDisclosure } from "lib/hooks";
import { truncateString } from "lib/utils";
import { formatUnits } from "lib/utils/web3";
import { NETWORKS } from "lib/web3";

import type { Props as ModalProps } from "components/core/Modal/Modal";

export interface Props extends ModalProps {}

const DisconnectWallet = ({ ...props }: Props) => {
  const [value, copy] = useCopyToClipboard();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { address, connector } = useAccount(),
    { data: ensName } = useEnsName({
      address,
    }),
    { data: ensAvatar } = useEnsAvatar({
      name: ensName ? normalize(ensName) : undefined,
      // TODO: add gateway URLs to resolve ipfs and/or arweave assets
    }),
    { data: balance } = useBalance({
      address,
    }),
    chainId = useChainId();

  const currentNetworkIcon = NETWORKS.find((network) => network.id === chainId)
    ?.icon;

  const { disconnect } = useDisconnect({
    mutation: {
      onError: (error) => {
        onClose();
        toast.error(
          <Toast variant="error" title="Error" description={error.message} />,
        );
      },
      onSuccess: () => {
        onClose();
        toast.success(
          <Toast
            variant="success"
            title="Success"
            description="We hope to see you again soon!"
          />,
        );
      },
    },
  });

  const MODAL_BUTTONS = [
    {
      label: "Copy Address",
      icon: <FiClipboard />,
      onClick: () => copy(address!),
    },
    {
      label: "Disconnect",
      icon: <FiLogOut />,
      onClick: () => disconnect(),
      ariaLabel: "Disconnect Wallet",
    },
  ];

  useEffect(() => {
    if (!value) return;

    toast.success(
      <Toast
        variant="success"
        title="Copied!"
        description="Address has been copied to clipboard."
      />,
    );
  }, [value]);

  return (
    <Modal
      trigger={
        <Button
          display="flex"
          alignItems="center"
          gap={1}
          aria-label="Open Disconnect Modal"
        >
          <Image
            src={ensAvatar ?? currentNetworkIcon}
            alt={ensAvatar ? ensName! : "current chain"}
            h={4}
            w={4}
            borderRadius={ensAvatar ? "full" : "none"}
          />
          {ensName ?? truncateString(address!)}
        </Button>
      }
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      {...props}
    >
      <Flex direction="column" align="center" gap={2}>
        <Image
          src={ensAvatar ?? currentNetworkIcon}
          alt={ensAvatar ? ensName! : "current chain"}
          h={20}
          w={20}
          borderRadius={ensAvatar ? "full" : "none"}
        />
        <Text fontSize="lg" fontWeight="semibold">
          {ensName ?? truncateString(address!)}
        </Text>
        {balance && (
          <Badge variant="subtle">
            <panda.p>
              {formatUnits({
                value: balance.value,
                decimals: balance.decimals,
                precision: 3,
              })}
              <panda.span ml={1}>{balance.symbol}</panda.span>
            </panda.p>
          </Badge>
        )}
        <Flex gap={1} align="center">
          <Circle
            size={1}
            bgColor={{ base: "green.600", _dark: "green.500" }}
            animation="pulse"
          />
          <Text fontSize="xs" color={{ base: "green.600", _dark: "green.500" }}>
            {connector?.name} connected
          </Text>
        </Flex>

        <Flex w="100%" gap={2} mt={2}>
          {MODAL_BUTTONS.map(({ label, icon, onClick, ariaLabel }) => (
            <Button
              key={label}
              flexDirection="column"
              justifyContent="center"
              gap={2}
              flex={1}
              bgColor="bg.subtle"
              _hover={{
                bgColor: "accent.subtle",
              }}
              onClick={onClick}
              aria-label={ariaLabel}
            >
              <Icon color="fg.default" h={4} w={4}>
                {icon}
              </Icon>
              <Text fontSize="sm">{label}</Text>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Modal>
  );
};

export default DisconnectWallet;
