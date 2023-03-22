import { SdkConfig } from "@connext/sdk";
import { ethers } from "ethers";

const sdkConfig = {
    signerAddress: signerAddress,
    // Use `mainnet` when you're ready...
    network: "testnet",
    // Add more chains here! Use mainnet domains if `network: mainnet`.
    // This information can be found at https://docs.connext.network/resources/supported-chains
    chains: {
      1735353714: { // Goerli domain ID
        providers: ["https://rpc.ankr.com/eth_goerli"],
      },
      1735356532: { // Optimism-Goerli domain ID
        providers: ["https://goerli.optimism.io"],
      },
      9991: {
        providers: ["https://rpc.ankr.com/polygon_mumbai"]
      }
    },
  };
  export { sdkConfig };