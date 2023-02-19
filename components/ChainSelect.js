import React, { Component } from 'react'

export default function ChainSelect({ chain, setChain }) {
    return (
        <div className='w-full max-w-6xl  mx-auto'>
            <div
                className={`pr-0 gap-5 inline-flex items-start text-left w-full px-[15px] py-[10px] bg-[rgba(236,236,236,1)] rounded-2xl mt-10`}
            >
                {/* <button
                    onClick={() => setChain("all")}
                    className={`py-[20px] px-[30px]  gap-2.5  flex justify-center items-center font-semibold  w-[91px] rounded-[10px] text-[rgba(150,208,104,1)] ${chain == "all" ? "bg-white" : ""}`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">All</p>
                </button> */}
                <button
                    onClick={() => setChain("goerli")}
                    className={`py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[177px] rounded-[10px] text-[rgba(70,70,70,0.5)] ${chain == "goerli" ? "bg-white" : ""}`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">
                        Goerli
                    </p>
                </button>
                <button
                    onClick={() => setChain("mumbai")}
                    className={`${chain == "mumbai" ? "bg-white" : ""} py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[158px] rounded-[10px] text-[rgba(70,70,70,0.5)]`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">
                        Mumbai
                    </p>
                </button>
                <button
                    onClick={() => setChain("optimism")}
                    className={`${chain == "optimism" ? "bg-white" : ""} py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[180px] rounded-[10px] text-[rgba(70,70,70,0.5)]`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">
                        Optimism
                    </p>
                </button>
                <button
                    onClick={() => setChain("arbitrum")}
                    className={`${chain == "arbitrum" ? "bg-white" : ""} py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[168px] rounded-[10px] text-[rgba(70,70,70,0.5)]`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">
                        Arbitrum
                    </p>
                </button>
                <button
                    onClick={() => setChain("avalanche")}
                    className={`${chain == "avalanche" ? "bg-white" : ""} py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[215px] rounded-[10px] text-[rgba(70,70,70,0.5)]`}
                >
                    <p className=" m-0 leading-[19.530521392822266px]">
                        Avalanche C
                    </p>
                </button>
            </div>
        </div>
    );
}