import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import DropSelect from "./DropSelect";
import StreamInfo from "./StreamInfo";
import { useAccount } from "wagmi";
import { getNetwork, fetchBalance } from "@wagmi/core";
import { bridgeDataConfig } from "@/data/config";
import { ConnextIcon, GoerliIcon, PolygonIcon } from "./icons";
import FlowRateModal from "./FLowrateModal";
import useXStream from "@/hooks/xStream/useXStream";

const coins = [
  // { id: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", name: 'USDC' },
  // { id: "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540", name: 'BUSD' },
  // { id: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844", name: 'DAI' },
  // { id: "0xe802376580c10fe23f027e1e19ed9d54d4c9311e", name: 'USDT' }
  {
    address: "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1",
    name: "TEST",
    icon: <ConnextIcon />,
  },
  // {
  //   id: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0",
  //   name: "TESTx",
  //   icon: <ConnextIcon />,
  // },
];

const chainList = [
  { name: "goerli", id: "5", icon: <GoerliIcon /> },
  { name: "polygon mumbai", id: "80001", icon: <PolygonIcon /> },
];

const SendXStream = () => {
  const { address, isConnected } = useAccount();
  const [selectedType, setSelectedType] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [toChain, setToChain] = useState(null);
  const [fromChain, setFromChain] = useState(null);
  const [receipient, setReceipient] = useState(null);
  const [amount, setAmount] = useState(null);
  const [token, setToken] = useState(null);

  const currentDate = new Date();
  const hoursToAdd = 6;
  currentDate.setTime(currentDate.getTime() + (hoursToAdd * 60 * 60 * 1000));
  const [endDate, setEndDate] = useState(dayjs(currentDate));
  const [balance, setBalance] = useState(0);

  const { chain } = getNetwork();

  // custom hooks
  const hookXStream = useXStream();

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
        await hookXStream.sendStreamSameChain();
      } else if (toChain.name !== fromChain.name) {
        await hookXStream.sendStreamDifferentChain();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token?.address) {
        hookXStream.getBalance();
    }
  }, [token?.address, chain?.id]);

  return (
    <div className="main-container w-full h-screen ">
      <FlowRateModal
        isOpen={isOpen}
        selectedType={selectedType}
        setAmount={setAmount}
        setIsOpen={() => {
          setIsOpen(!isOpen);
        }}
      />
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
              options={bridgeDataConfig[chain.id].acceptedTokens}
              placeholder={"Select a token"}
            />
            <DatePicker selected={endDate} setSelected={setEndDate} />
            <input
              className="rounded-lg w-full mt-9 px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none"
              placeholder="Select token value or flow rate"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {/* <DropSelect
              selected={selectedType}
              setSelected={(value) => {
                setSelectedType(value);
                setIsOpen(!isOpen);
              }}
              options={[
                {
                  id: 1,
                  name: "Select token value",
                },
                {
                  id: 2,
                  name: "Select token flow rate",
                },
              ]}
              placeholder={"Select token value or flow rate"}
            /> */}
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
