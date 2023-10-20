import { useState } from "react";
import { useConnect } from "wagmi";

import Button from "components/core/Button/Button";
import Image from "components/core/Image/Image";
import Modal from "components/core/Modal/Modal";
import Spinner from "components/core/Spinner/Spinner";
import Text from "components/core/Text/Text";
import { Flex, panda } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";

import type { Props as ModalProps } from "components/core/Modal/Modal";
import type { Connector, CreateConnectorFn } from "wagmi";

export interface Props extends ModalProps {}

const ConnectWallet = ({ ...props }: Props) => {
  const [currentConnector, setCurrentConnector] = useState<
    CreateConnectorFn | Connector | null
  >(null);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { connectors, connect, status } = useConnect({
    mutation: {
      onError: () => setCurrentConnector(null),
      onMutate: ({ connector }) => setCurrentConnector(connector),
      onSuccess: () => onClose(),
    },
  });

  return (
    <Modal
      trigger={<Button>Connect</Button>}
      title="Connect Wallet"
      description="Select option to connect your wallet."
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
            onClick={() => connect({ connector })}
          >
            {/* TODO: update image sources, use switch statement, or enum */}
            <Image
              src={
                connector.name === "Brave Wallet"
                  ? "/svg/connectors/brave.svg"
                  : "/svg/connectors/ethereum.svg"
              }
              alt="injected connector"
              h={4}
              w={4}
            />
            <Text fontSize="lg">{connector.name}</Text>
            {status === "pending" && connector == currentConnector && (
              <Flex align="center" ml={2} gap={1}>
                <Spinner size="xs" />
                <Text fontSize="xs" color="fg.emphasized">
                  Connecting...
                </Text>
              </Flex>
            )}
          </Button>
        ))}
        {/* TODO: use custom Link component when available */}
        <panda.a
          href="https://ethereum.org/en/wallets/"
          target="_blank"
          rel="noreferrer noopener"
          color="brand.primary.500"
          placeSelf="center"
          fontSize="sm"
          _hover={{ textDecoration: "none", opacity: 0.8 }}
        >
          Learn more about Ethereum wallets
        </panda.a>
      </Flex>
    </Modal>
  );
};

export default ConnectWallet;
