import { AuthContext } from "@/providers/AuthProvider";
import React, { Component, useContext } from "react";
import { useConnect } from "wagmi";

export default function ChainSelect() {
  const authContext = useContext(AuthContext);

  return (
    <div className="w-full max-w-6xl  mx-auto">
      <div
        className={`pr-0 gap-5 inline-flex items-start text-left w-fit pr-4 px-[15px] py-[10px] bg-[rgba(236,236,236,1)] rounded-2xl mt-10`}
      >
        <button
          onClick={() => authContext.setViewChain({
            name: "goerli",
            id: 5
          })}
          className={`py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[177px] rounded-[10px] text-[rgba(70,70,70,0.5)] ${
            authContext.viewChain?.name == "goerli" ? "bg-white" : ""
          }`}
        >
          <p className=" m-0 leading-[19.530521392822266px]">Goerli</p>
        </button>
        <button
          onClick={() => authContext.setViewChain({
            name: "mumbai",
            id: 80001
          })}
          className={`${
            authContext.viewChain?.name == "mumbai" ? "bg-white" : ""
          } py-[20px] px-[30px] gap-2.5  flex justify-center items-center font-medium pl-[30px] pr-[30px] w-[158px] rounded-[10px] text-[rgba(70,70,70,0.5)]`}
        >
          <p className=" m-0 leading-[19.530521392822266px]">Mumbai</p>
        </button>
      </div>
    </div>
  );
}
