
export const bridgeDataConfig = {
  5: {
    // goerli testnet
    erc20TokenAddress: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1", // TEST
    superTokenAddress: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0", // TESTx
    xstreamContractAddress: "0x5644388772713c0B10604037ef1E26DcB0824ca2", // contract deployed on Goerli; updated at 12:09
    connextDomainId: 1735353714,
    acceptedTokens: [
      // {
      //   address: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0",
      //   name: "TESTx",
      //   type: "superToken",
      // },
      {
        address: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
        name: "TEST",
        type: "erc20",
      },
    ]
  },
  80001: {
    //mumbai testnet
    erc20TokenAddress: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
    superTokenAddress: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
    xstreamContractAddress: "0x489a8D2A9c5a1f18eBd07E0D27d007550faE9B19", // contract deployed on Mumbai testnet
    connextDomainId: 9991,
    acceptedTokens: [
      // {
      //   address: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
      //   name: "TESTx",
      //   type: "superToken",
      // },
      {
        address: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
        name: "TEST",
        type: "erc20",
      },
    ]
  },
  100: {
    // Gnosis Mainnet Chain
    erc20TokenAddress: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83", // USDC on gnosis
    superTokenAddress: "0x1234756ccf0660E866305289267211823Ae86eEc", // USDCx on gnosis
    xstreamContractAddress: "", // Contract deployed on gnosis
    connextDomainId: 6778479,
    acceptedTokens: [
      {
        address: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
        name: "USDC",
        type: "erc20",
      },
    ]
  },
  137: {
    // Polygon Mainnet
    erc20TokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
    superTokenAddress: "0xCAa7349CEA390F89641fe306D93591f87595dc1F", // USDCx on Polygon
    xstreamContractAddress: "", // Contract deployed on Polygon
    connextDomainId: 1886350457,
    acceptedTokens: [
      {
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        name: "USDC",
        type: "erc20",
      },
    ]
  },
};


export const subgraphURIs = {
  "xstream": {
    5: "https://api.thegraph.com/subgraphs/name/aditya172926/xstream",
    1735353714: "https://api.thegraph.com/subgraphs/name/aditya172926/xstream", // connext domain goerli

    80001: "https://api.thegraph.com/subgraphs/name/aditya172926/xstreammumbai",
    9991: "https://api.thegraph.com/subgraphs/name/aditya172926/xstreammumbai", // connext domain mumbai
  },
  "superfluid": {
    5: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli",
    1735353714: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli", // connext domain goerli

    80001: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai",
    9991: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai", // connext domain mumbai 
  }
}

export const chainDomains = {
  9991: {name: "Polygon Mumbai", id: 80001},
  1735353714: {name: "Goerli", id: 5},

  1886350457: {name: "Polygon", id: 137},
  6778479: {name: "Gnosis", id: 100},
  6648936: {name: "Ethereum Mainnet", id: 1}
}