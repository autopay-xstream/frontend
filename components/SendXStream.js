import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import originAbi from "../data/originAbi.json";
import destinationAbi from "../data/destinationAbi.json";
import DatePicker from "./DatePicker";
import DropSelect from "./DropSelect";
import StreamInfo from "./StreamInfo";
import { parseEther } from "ethers/lib/utils.js";
import { useAccount } from "wagmi";
import { Framework } from "@superfluid-finance/sdk-core";
import { toast } from "react-toastify";
import TestTokenAbi from "../data/TestTokenAbi.json";
import { getNetwork, fetchBalance } from "@wagmi/core";
import { bridgeDataConfig } from "@/data/config";

const chainList = [
  { name: "goerli", id: 5 },
  { name: "mumbai", id: 80001 },
];

const SendXStream = () => {
  const { address, isConnected } = useAccount();

  const [toChain, setToChain] = useState(null);
  const [fromChain, setFromChain] = useState(null);
  const [receipient, setReceipient] = useState(null);
  const [amount, setAmount] = useState(null);
  const [token, setToken] = useState(null);
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [balance, setBalance] = useState(0);

  const { chain, chains } = getNetwork();

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
          "70000000000000000", //relayer fees
          "300", //slippage
          parseEther(amount), //amount of tokens to send
          token?.address,
          bridgeDataConfig[toChain?.id].xstreamContractAddress,
          bridgeDataConfig[toChain?.id].connextDomainId,
          { value: parseEther("0.07") }
        );
        await transaction.wait();
        toast.info("Transaction Submitted...");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ss = new Date(endDate.$d);
      const dd = new Date();
      console.log(ss < dd);
      if (new Date(endDate.$d).getTime() < new Date().getTime()) {
        alert("Invalid date time");
        return;
      }
      if (
        new Date(endDate.$d).getDate() === new Date().getDate() &&
        new Date(endDate.$d).getHours() - new Date().getHours() < 6
      ) {
        alert("Select atleast 6 hours");
        return;
      }
      // alert(toChain.name, fromChain.name);

      if (toChain.name === fromChain.name) {
        await sendStreamSameChain();
      } else if (toChain.name !== fromChain.name) {
        await sendStreamDifferentChain();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBalance = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const tokenBalance = await fetchBalance({
            address: address,
            token: token?.address
        });
        console.log("the current selected tokenbalance is ", tokenBalance);
        setBalance(tokenBalance.formatted);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token?.address) {
        getBalance();
    }
  }, [token?.address, chain?.id]);

  return (
    <div className="main-container w-full h-screen ">
      <div className="max-w-6xl mx-auto mt-16 rounded-2xl bg-white w-full ">
        <form className="p-10">
          <div className="flex items-center justify-between w-full gap-10 ">
            <DropSelect
              selected={fromChain}
              setSelected={setFromChain}
              options={chainList}
              placeholder={"Transfer from chain"}
            />
            <DropSelect
              selected={toChain}
              setSelected={setToChain}
              options={chainList}
              placeholder={"Transfer to chain"}
            />
          </div>
          <input
            value={receipient}
            onChange={(e) => setReceipient(e.target.value)}
            className="rounded-lg mt-8 w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
            placeholder="Enter  receipient address or ENS"
          />
          <div className="flex items-center justify-between gap-10">
            <DropSelect
              selected={token}
              setSelected={setToken}
              options={bridgeDataConfig[chain?.id].acceptedTokens}
              placeholder={"Select a token"}
            />
            <DatePicker selected={endDate} setSelected={setEndDate} />
            <input
              className="rounded-lg w-full mt-9 px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
              placeholder="Select token value or flow rate"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="w-full h-[2px] bg-gray-300 mt-12" />
          {toChain && fromChain && receipient && amount && token && endDate && (
            <>
              <div className="flex items-center gap-4 mt-8 text-2xl px-3">
                <p>Balance:</p> <p className="text-[#96D068]">{balance}</p>
              </div>
              <StreamInfo
                toChain={toChain}
                fromChain={fromChain}
                receipient={receipient}
                amount={amount}
                token={token}
                endDate={endDate}
              />

              <button
                onClick={handleSubmit}
                className="w-[403px] h-[67px] flex items-center justify-center bg-[#96D068] rounded-[10px] px-[80px] py-[20px] mx-auto mt-10 text-white"
              >
                Confirm
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SendXStream;
