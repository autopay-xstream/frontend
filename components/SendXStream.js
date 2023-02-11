import dayjs from 'dayjs'
import React, { useState } from 'react'
import DatePicker from './DatePicker'
import DropSelect from './DropSelect'
import StreamInfo from './StreamInfo'

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


    const [toChain, setToChain] = useState(null);
    const [fromChain, setFromChain] = useState(null);
    const [receipient, setReceipient] = useState(null);
    const [amount, setAmount] = useState(null);
    const [token, setToken] = useState(null);
    const [endDate, setEndDate] = useState(dayjs('2023-02-11T12:11:54'));

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
                                <p>Balance:</p> <p className='text-[#96D068]'>1234.659831</p>
                            </div>
                            <StreamInfo
                                toChain={toChain}
                                fromChain={fromChain}
                                receipient={receipient}
                                amount={amount}
                                token={token}
                                endDate={endDate}
                            />

                            <button className='w-[403px] h-[67px] flex items-center justify-center bg-[#96D068] rounded-[10px] px-[80px] py-[20px] mx-auto mt-10 text-white'>
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