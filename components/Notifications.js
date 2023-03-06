import { ethers } from "ethers";
import Image from "next/image";
import React, { Component, useEffect, useState } from "react";
import { apolloClient } from "@/helpers/apollo";
import { gql } from "@apollo/client";
import { truncateAddress } from "@/helpers/formatHelper";

export default function Notifications(props) {
  const [userEvents, setUserEvents] = useState([]);

  const querySubgraph = async() => {
    const xStream_Flow_Trigger = `
    query {
      xStreamFlowTriggers(
        where : {sender: "${props.address}"}
      ) {
        sender
        receiver
        selectedToken
        flowRate
        streamStatus
        startTime
        bufferFee
        networkFee
        destinationDomain
        blockNumber
        blockTimestamp
        transactionHash
      }
    }
  `

  const res = await apolloClient.query({
    query: gql(xStream_Flow_Trigger),
  });
  console.log("The graphql result ", res);
  setUserEvents(res?.data?.xStreamFlowTriggers);
  }

  useEffect(() => {
    if (props.address) {
      console.log("calling the subgraph");
      querySubgraph();
    }
  }, [props.address]);

  return (
    <div className="main-container w-full h-screen">
      <div className={`mx-auto mt-16 rounded-3xl  bg-white w-full max-w-6xl `}>
        <table className=" rounded-3xl overflow-hidden w-full">
          <thead>
            <tr>
              <TableHead>Status Update</TableHead>
              <TableHead>Receipient</TableHead>
              <TableHead>Token Amount</TableHead>
              <TableHead>Amount/month</TableHead>
              <TableHead></TableHead>
            </tr>
          </thead>
          <tbody>
            {userEvents.map((item, index) => {
              return (
                <>
                <TableRow>
              <TableData>{item.streamStatus == 1? "Initiated" : "Updated"}</TableData>
              <TableData>{truncateAddress(item.receiver)}</TableData>
              <TableData></TableData>
              <TableData>{item.flowRate}</TableData>
              <TableData>
                <Image
                  src={require("../image/link.png")}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  alt="link"
                />
              </TableData>
            </TableRow>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const TableData = ({ children }) => {
  return (
    <td className="text-[#464646] py-4 font-medium text-sm">{children}</td>
  );
};
const TableHead = ({ children }) => {
  return (
    <th className="text-[#464646] py-4 border-none font-medium text-sm opacity-40">
      {children}
    </th>
  );
};

export const TableRow = ({ children }) => {
  return <tr className="border-t-[1px] border-[#e3e2e2]">{children}</tr>;
};
