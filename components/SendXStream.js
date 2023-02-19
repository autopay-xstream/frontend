import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

import { ethers } from 'ethers'
import abi from "../data/abi.json";

import DatePicker from './DatePicker'
import DropSelect from './DropSelect'
import StreamInfo from './StreamInfo'
import { parseEther } from 'ethers/lib/utils.js';
import { useAccount } from 'wagmi';
import { Framework } from "@superfluid-finance/sdk-core";
import { toast } from 'react-toastify';

const options = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const chains = [
    { name: "goerli", id: "5" },
    { name: "polygon", id: "80001" }
]

const coins = [
    // { id: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", name: 'USDC' },
    // { id: "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540", name: 'BUSD' },
    // { id: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844", name: 'DAI' },
    // { id: "0xe802376580c10fe23f027e1e19ed9d54d4c9311e", name: 'USDT' }
    { id: "0x3427910EBBdABAD8e02823DFe05D34a65564b1a0", name: 'TESTx' },
]

const SendXStream = () => {
    const { address, isConnected } = useAccount();


    const [toChain, setToChain] = useState(null);
    const [fromChain, setFromChain] = useState(null);
    const [receipient, setReceipient] = useState(null);
    const [amount, setAmount] = useState(null);
    const [token, setToken] = useState(null);
    const [endDate, setEndDate] = useState(dayjs(new Date));
    const [balance, setBalance] = useState(0);




    const sendStreamSameChain = async () => {

        const senderAddress = address;
        const receiverAddress = receipient
        const flowRate = amount

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

                const TOKENxContract = await sf.loadSuperToken("0x3427910EBBdABAD8e02823DFe05D34a65564b1a0");
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

        const endDate = new Date(endDate);
        const timeDiff = Math.abs(endDate.getTime() - now.getTime());
        console.log(timeDiff);


        const amount = ethers.utils.parseEther(amountInEther.toString());
        const calculatedFlowRate = Math.floor(amount / timeDiff);

        return calculatedFlowRate;

    }

    const sendStreamDifferentChain = async () => {

        if (typeof window.ethereum !== 'undefined') {
            const contractAdd = "0x71E7F4E696d35F0e19eb0E561AA66881443DE1FB";

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()

            const contract = new ethers.Contract(contractAdd, abi, signer)
            toast.info("Creating your stream...");
            const transaction = await contract._sendFlowMessage(                //_sendFlowMessage
                "1",                    //streamActionType
                address,                //sender
                receipient,             //receiver
                "1000000",              //flowRate
                "70000000000000000",    //relayer fees
                "300",                  //slippage
                amount,                  //amount of tokens to send
                { value: parseEther("0.07") }
            )
            toast.info("Transaction Submitted...");
            await transaction.wait()
            toast.error("Your stream is xcalling !..");
        }

        try {

        } catch (error) {
            console.error(error);
        }
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            // alert(toChain.name, fromChain.name);

            if (toChain.name === fromChain.name) {
                await sendStreamSameChain()
            } else if (toChain.name !== fromChain.name) {
                await sendStreamDifferentChain()
            }

        } catch (error) {
            console.error(error);
        }

    }

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

                const DAIxContract = await sf.loadSuperToken("0x3427910EBBdABAD8e02823DFe05D34a65564b1a0");
                const DAIx = DAIxContract.address;

                try {
                    const b = await DAIxContract.balanceOf({
                        account: account,
                        providerOrSigner: signer,
                    });
                    const bal = ethers.utils.formatEther(b);
                    // alert(bal);
                    setBalance(bal);
                } catch (error) {
                    console.error(error);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBalance();
    }, [address])


    return (
        <div className="main-container w-full h-screen ">
            <div className="max-w-6xl mx-auto mt-16 rounded-2xl bg-white w-full ">
                <form className='p-10'>
                    <div className='flex items-center justify-between w-full gap-10 '>
                        <DropSelect selected={fromChain} setSelected={setFromChain} options={chains} placeholder={"Transfer from chain"} />
                        <DropSelect selected={toChain} setSelected={setToChain} options={chains} placeholder={"Transfer to chain"} />
                    </div>
                    <input value={receipient} onChange={e => setReceipient(e.target.value)} className="rounded-lg mt-8 w-full px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none" placeholder="Enter  receipient address or ENS" />

                    <div className='flex items-center justify-between gap-10'>
                        <DropSelect selected={token} setSelected={setToken} options={coins} placeholder={"Select a token"} />
                        <DatePicker selected={endDate} setSelected={setEndDate} />
                        <input className="rounded-lg w-full mt-9 px-8 py-6 border-[1px] mr-0 border-gray-300 text-gray-800 bg-white focus:outline-none" placeholder="Select token value or flow rate" value={amount} onChange={e => setAmount(e.target.value)} />

                    </div>

                    <div className='w-full h-[2px] bg-gray-300 mt-12' />

                    {
                        toChain &&
                        fromChain &&
                        receipient &&
                        amount &&
                        token &&
                        endDate &&
                        <>
                            <div className='flex items-center gap-4 mt-8 text-2xl px-3'>
                                <p>Balance:</p> <p className='text-[#96D068]'>{balance}</p>
                            </div>
                            <StreamInfo
                                toChain={toChain}
                                fromChain={fromChain}
                                receipient={receipient}
                                amount={amount}
                                token={token}
                                endDate={endDate}
                            />

                            <button onClick={handleSubmit} className='w-[403px] h-[67px] flex items-center justify-center bg-[#96D068] rounded-[10px] px-[80px] py-[20px] mx-auto mt-10 text-white'>
                                Confirm
                            </button>
                        </>
                    }
                </form>
            </div>
        </div>
    )
}

export default SendXStream