import { ethers } from "ethers";
import originAbi from "@/data/originAbi.json";
import destinationAbi from "@/data/destinationAbi.json";
import { Framework } from "@superfluid-finance/sdk-core";
import { toast } from "react-toastify";
import TestTokenAbi from "@/data/TestTokenAbi.json";
import { parseEther } from "ethers/lib/utils.js";
import { fetchxStreamInflow, fetchxStreamOutflow } from "@/helpers/xStreamSubgraph";
import { useAccount } from "wagmi";
import {useState} from "react";

const useXStream = () => {
  const { address, isConnected } = useAccount();
  const [userEvents, setUserEvents] = useState([]);

  const getBalance = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const tokenBalance = await fetchBalance({
          address: address,
          token: token?.address,
        });
        console.log("the current selected tokenbalance is ", tokenBalance);
        setBalance(tokenBalance.formatted);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateFlowRate = (amountInEther) => {
    const now = new Date();

    const endD = new Date(endDate);
    const timeDiff = Math.abs(endD.getTime() - now.getTime());
    console.log(timeDiff);

    const amount = ethers.utils.parseEther(amountInEther.toString());
    const calculatedFlowRate = Math.floor(amount / timeDiff);

    // alert(calculatedFlowRate);

    return calculatedFlowRate;
  };

  const sendStreamDifferentChain = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        let tokenContract;

        // currently on Goerli Testnet
        tokenContract = new ethers.Contract(
          token?.address,
          TestTokenAbi,
          signer
        );

        try {
          let txn = await tokenContract.approve(
            bridgeDataConfig[chain.id].xstreamContractAddress,
            parseEther(amount)
          );
          await txn.wait();
        } catch (error) {
          console.log("Error in approving tokens ", error);
          return;
        }

        const flowRate = calculateFlowRate(amount);
        const contractAbi = chain?.id == 5 ? originAbi : destinationAbi;
        const originContract = new ethers.Contract(
          bridgeDataConfig[chain.id].xstreamContractAddress,
          contractAbi,
          signer
        );

        toast.info("Creating your XStream...");
        const transaction = await originContract._sendFlowMessage(
          //_sendFlowMessage
          "1", //streamActionType
          receipient, //receiver
          flowRate, //flowRate
          "80000000000000000", //relayer fees
          "300", //slippage
          parseEther(amount), //amount of tokens to send
          token?.address,
          bridgeDataConfig[toChain?.id].xstreamContractAddress,
          bridgeDataConfig[toChain?.id].connextDomainId,
          { value: parseEther("0.08") }
        );
        await transaction.wait();
        toast.info("Transaction Submitted...");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const sendStreamSameChain = async () => {
    const senderAddress = address;
    const receiverAddress = receipient;
    const flowRate = amount;

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

        const TOKENxContract = await sf.loadSuperToken(
          "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0"
        );
        const TOKENx = TOKENxContract.address;

        try {
          const createFlowOperation = sf.cfaV1.createFlowByOperator({
            sender: senderAddress,
            receiver: receiverAddress,
            flowRate: flowRate,
            superToken: TOKENx,
          });

          console.log("Creating your stream...");
          toast.info("Creating your stream...");

          const result = await createFlowOperation.exec(signer);
          console.log(result);

          console.log(`Congrats - you've just created a money stream!`);
        } catch (error) {
          console.log(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
          );
          toast.error(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
          );
          console.error(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const querySubgraph = async (flowType) => {
    let flowEvents;
    if (flowType == "Incoming") {
      flowEvents = await fetchxStreamInflow(address);
    } else if (flowType == "Outgoing") {
      flowEvents = await fetchxStreamOutflow(address);
    }
    console.log("Result data ", flowEvents.data);
    setUserEvents(flowEvents.data.xStreamFlowTriggers);
  };

  return {
    userEvents: userEvents,
    querySubgraph: querySubgraph,
    getBalance: getBalance,
    sendStreamDifferentChain: sendStreamDifferentChain,
    sendStreamSameChain: sendStreamSameChain,
  };
};

export default useXStream;
