// TODO: update switch statement or refactor as needed
const getConnectorImage = (connectorName: string) => {
  switch (connectorName) {
    case "Brave Wallet":
      return "/svg/connectors/brave.svg";
    case "MetaMask":
      return "/svg/connectors/metamask.svg";
    case "Phantom":
      return "/svg/connectors/phantom.svg";
    default:
      return "/svg/connectors/ethereum.svg";
  }
};

export default getConnectorImage;
