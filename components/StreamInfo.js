import { truncateAddress } from '@/helpers/formatHelper';
import { ethers } from 'ethers';
import React from 'react'

const StreamInfo = ({
    toChain,
    fromChain,
    receipient,
    amount,
    token,
    endDate,
}) => {

    const calculateFlowRate = (amountInEther) => {
        const now = new Date();
        const endD = new Date(endDate);
        const timeDiff = Math.abs(endD.getTime() - now.getTime());
        console.log(timeDiff);
        const amount = ethers.utils.parseEther(amountInEther.toString());
        const calculatedFlowRate = Math.floor(amount / timeDiff);
        return calculatedFlowRate / 10 ** 18;
    }




    return (
        <div className='px-6'>
            <div
                className={`[box-shadow:0px_0px_0px_1px_rgba(150,_208,_104,_1)_inset] [box-shadow-width:1px] px-10 gap-2.5 inline-flex flex-col items-start text-left py-[30px] w-full bg-[rgba(150,208,104,0.1)] rounded-[10px] mt-5 fade-in`}
            >
                <div className="flex justify-between items-center w-full">
                    <p
                        className="text-sm font-normal m-0 w-[137px] leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        Receiver
                    </p>
                    <p
                        className="text-sm font-semibold m-0 w-[174px] leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {truncateAddress(receipient)}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p
                        className="text-sm font-normal m-0 w-[139px] leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        Destination Chain
                    </p>
                    <p
                        className="text-sm capitalize font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {toChain.name}
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <p
                        className="text-sm font-normal m-0 leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        End Date
                    </p>
                    <p
                        className="text-sm font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {(endDate.$d).toLocaleDateString()}  {(endDate.$d).toLocaleTimeString()}
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <p
                        className="text-sm font-normal m-0 leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        Token value assigned for stream
                    </p>
                    <p
                        className="text-sm capitalize font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {amount} {token.name}
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <div
                        className="gap-2.5 flex justify-center items-center font-normal w-[150px] text-[rgba(70,70,70,1)]"
                    >
                        <p className="text-sm m-0 leading-[normal]">
                            Superfluid buffer
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>

                    </div>
                    <p
                        className="text-sm font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {calculateFlowRate(amount.toString()) * 21600} {token.name}
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <div
                        className="gap-2.5 flex justify-center items-center font-normal w-[117px] text-[rgba(70,70,70,1)]"
                    >
                        <p className="text-sm m-0 leading-[normal]">Network fee</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>

                    </div>
                    <p
                        className="text-sm font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        0.07  Ether
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <p
                        className="text-sm font-normal m-0 leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        Balance after buffer and fees
                    </p>
                    <p
                        className="text-sm font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {amount - calculateFlowRate(amount.toString()) * 21600}  {token.name}
                    </p>
                </div>
                <div className="flex justify-between items-start w-full">
                    <p
                        className="text-sm font-normal m-0 capitalize leading-[normal] text-[rgba(70,70,70,1)]"
                    >
                        {`Token streamed per second on ${toChain.name} Chain`}
                    </p>
                    <p
                        className="text-sm font-semibold m-0 leading-[normal] text-[rgba(150,208,104,1)]"
                    >
                        {calculateFlowRate(amount.toString())} {token.name} / second
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StreamInfo;
