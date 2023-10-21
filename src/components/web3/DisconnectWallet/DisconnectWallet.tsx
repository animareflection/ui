import { default as toast } from "react-hot-toast";
import { normalize } from "viem/ens";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

import Button from "components/core/Button/Button";
import Image from "components/core/Image/Image";
import Modal from "components/core/Modal/Modal";
import Text from "components/core/Text/Text";
import Toast from "components/core/Toast/Toast";
import { Flex } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";
import { truncateString } from "lib/utils";
import { getConnectorImage } from "lib/utils/web3";

import type { Props as ModalProps } from "components/core/Modal/Modal";

export interface Props extends ModalProps {}

const ConnectWallet = ({ ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { address } = useAccount(),
    { data: ensName } = useEnsName({
      address,
    }),
    { data: ensAvatar } = useEnsAvatar({
      name: ensName ? normalize(ensName) : undefined,
    });

  const { connectors, disconnect } = useDisconnect({
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

  return (
    <Modal
      trigger={
        <Button display="flex" alignItems="center" gap={2}>
          <Image
            // TODO: update to use current chain icon
            src={ensAvatar ?? "/svg/connectors/ethereum.svg"}
            alt="current chain"
            h={5}
            w={5}
            borderRadius={ensAvatar ? "full" : "none"}
          />
          {ensName ?? truncateString(address!)}
        </Button>
      }
      title="Disconnect Wallet"
      description="Select connector to disconnect your wallet from."
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      {...props}
    >
      <Flex direction="column" gap={2} mt={4}>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            display="flex"
            alignItems="center"
            gap={2}
            variant="ghost"
            onClick={() => disconnect({ connector })}
          >
            <Image
              src={getConnectorImage(connector.name)}
              alt="injected connector"
              h={4}
              w={4}
            />
            <Text fontSize="lg">{connector.name}</Text>
          </Button>
        ))}
      </Flex>
    </Modal>
  );
};

export default ConnectWallet;
