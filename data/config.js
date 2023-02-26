export const bridgeDataConfig = {
  5: {
    // goerli testnet
    erc20TokenAddress: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1", // TEST
    superTokenAddress: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0", // TESTx
    xstreamContractAddress: "0xB0Ee7045410AD4AA0854FCED0638b9Dcf63053dE",
    acceptedTokens: [
      // { id: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", name: 'USDC' },
      // { id: "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540", name: 'BUSD' },
      // { id: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844", name: 'DAI' },
      // { id: "0xe802376580c10fe23f027e1e19ed9d54d4c9311e", name: 'USDT' }
      {
        address: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0",
        name: "TESTx",
        type: "superToken",
      },
      {
        address: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
        name: "TEST",
        type: "erc20",
      },
    ],
  },
  80001: {
    //mumbai testnet
    erc20TokenAddress: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
    superTokenAddress: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
    xstreamContractAddress: "0x1D78ba0422131F9AB07A79E86713430923Ba2691",
    acceptedTokens: [
        // { id: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", name: 'USDC' },
        // { id: "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540", name: 'BUSD' },
        // { id: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844", name: 'DAI' },
        // { id: "0xe802376580c10fe23f027e1e19ed9d54d4c9311e", name: 'USDT' }
        {
          address: "0xFB5fbd3B9c471c1109A3e0AD67BfD00eE007f70A",
          name: "TESTx",
          type: "superToken",
        },
        {
          address: "0xeDb95D8037f769B72AAab41deeC92903A98C9E16",
          name: "TEST",
          type: "erc20",
        },
      ],
  },
};
