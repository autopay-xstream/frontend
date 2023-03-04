import { ethers } from "ethers";
import Image from "next/image";
import React, { Component, useEffect } from "react";

export default function Notifications(props) {
  useEffect(() => {
    if (props.address) {
      fetchNotifications();
    }
  }, []);

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
            <TableRow>
              <TableData>Initiated</TableData>
              <TableData>Fragments.eth</TableData>
              <TableData>USDC Polygon</TableData>
              <TableData>20</TableData>
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
            <TableRow>
              <TableData>Initiated</TableData>
              <TableData>Fragments.eth</TableData>
              <TableData>USDC Polygon</TableData>
              <TableData>20</TableData>
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
