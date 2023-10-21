import { useState } from "react";
import { default as toast } from "react-hot-toast";
import { useConnect } from "wagmi";

import Button from "components/core/Button/Button";
import Image from "components/core/Image/Image";
import Modal from "components/core/Modal/Modal";
import Spinner from "components/core/Spinner/Spinner";
import Text from "components/core/Text/Text";
import Toast from "components/core/Toast/Toast";
import { Flex, panda } from "generated/panda/jsx";
import { useDisclosure } from "lib/hooks";

import type { Props as ModalProps } from "components/core/Modal/Modal";
import type { Connector } from "wagmi";

export interface Props extends ModalProps {}

const ConnectWallet = ({ ...props }: Props) => {
  const [currentConnector, setCurrentConnector] = useState<Connector | null>(
    null,
  );

  const { isOpen, onClose, onOpen } = useDisclosure();

  const { connectors, connect, status } = useConnect({
    mutation: {
      onError: (error) => {
        setCurrentConnector(null);
        onClose();
        toast.error(
          <Toast variant="error" title="Error" description={error.message} />,
        );
      },
      onMutate: ({ connector }) => setCurrentConnector(connector as Connector),
      onSuccess: () => {
        setCurrentConnector(null);
        onClose();
        toast.success(
          <Toast
            variant="success"
            title="Success"
            description="Wallet connected successfully."
          />,
        );
      },
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
        {connectors.map((connector) => {
          // TODO: update switch statement or refactor as needed
          const imgSrc = (connectorName: string) => {
            switch (connectorName) {
              case "Brave Wallet":
                return "/svg/connectors/brave.svg";
              case "MetaMask":
                return "/svg/connectors/metamask.svg";
              default:
                return "/svg/connectors/ethereum.svg";
            }
          };

          return (
            <Button
              key={connector.uid}
              display="flex"
              alignItems="center"
              gap={2}
              variant="ghost"
              onClick={() => connect({ connector })}
            >
              <Image
                src={imgSrc(connector.name)}
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
          );
        })}
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
