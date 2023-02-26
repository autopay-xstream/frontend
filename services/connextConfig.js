import { ethers } from "ethers";

// Create a Signer and connect it to a Provider on the sending chain

var provider;
var signer;

if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
}

const signerAddress = await signer.getAddress();
console.log("Got the signer address ", signerAddress);

const sdkConfig = {
  signerAddress: signerAddress,
  // Use `mainnet` when you're ready...
  network: "testnet",
  // Add more chains here! Use mainnet domains if `network: mainnet`.
  // This information can be found at https://docs.connext.network/resources/supported-chains
  chains: {
    1735353714: {}, // Goerli domain ID
    1735356532: { // Optimism-Goerli domain ID
    },
    9991: {
        providers: []
    }
  },
};

export { signer, sdkConfig };