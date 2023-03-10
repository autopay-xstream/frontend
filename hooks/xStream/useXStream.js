const getBalance = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const account = await signer.getAddress();

      const sf = await Framework.create({
        chainId: 5,
        provider: provider,
      });

      const DAIxContract = await sf.loadSuperToken(
        "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0"
      );
      const DAIx = DAIxContract.address;

      try {
        const b = await DAIxContract.balanceOf({
          account: account,
          providerOrSigner: signer,
        });
        const bal = ethers.utils.formatEther(b);
        setBalane(bal);
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
