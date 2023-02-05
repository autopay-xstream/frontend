import React, { useState } from "react";
import Select from "react-dropdown-select";
import options from "../data/options";
import styled from "@emotion/styled";
import { ethers } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import { recoverAddress } from "ethers/lib/utils.js";

function SendStream() {
  const [tokenValue, setTokenValue] = useState("Enter Token Amount in Wei");

  //integration
  const sendStreamWithOperator = async () => {
    const senderAddress = document.getElementById("senderWalletAddress").value;
    const receiverAddress = document.getElementById(
      "receiverWalletAddress"
    ).value;
    const flowRate = document.getElementById("flowRate").value;

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

        const DAIxContract = await sf.loadSuperToken("fDAIx");
        const DAIx = DAIxContract.address;

        try {
          const createFlowOperation = sf.cfaV1.createFlowByOperator({
            sender: senderAddress,
            receiver: receiverAddress,
            flowRate: flowRate,
            superToken: DAIx,
          });

          console.log("Creating your stream...");

          const result = await createFlowOperation.exec(signer);
          console.log(result);

          console.log(`Congrats - you've just created a money stream!`);
        } catch (error) {
          console.log(
            "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
          );
          console.error(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const StyledSelect = styled(Select)`
    ${({ dropdownRenderer }) =>
      dropdownRenderer &&
      `
		.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
  `;

  return (
    <div className="main-container">
      <div className="box-container">
        <div className="set-permission-title">
          <span className="permission-title">Send Stream</span>
        </div>
        <div className="input-parent">
          <h4>Sender Wallet Address</h4>
          <input
            type="text"
            placeholder="Public Address"
            className="w-full input placeholder-gray-700"
            id="senderWalletAddress"
          />
        </div>
        <div className="input-parent">
          <h4>Receiver Wallet Address</h4>
          <input
            type="text"
            placeholder="Public Address"
            className="w-full input placeholder-gray-700"
            id="receiverWalletAddress"
          />
        </div>

        <div className="input-parent flex justify-between">
          <div className="super-token-input">
            <h4>Super Token</h4>
            {/* <input
          type="text"
          placeholder="Public Address"
          className="w-full input placeholder-gray-700"
        /> */}
            <StyledSelect
              options={options}
              disabled
              placeholder="fDAIx"
              values={[]}
              labelField="username"
              valueField="username"
              searchBy="username"
              onChange={(value) => console.log(value)}
              color={"#10bb34"}
              minHeight={"54px"}
            />
          </div>
          <div className="flow-rate-input grow ml-4">
            <h4>Flow Rate ( / second )</h4>
            <input
              type="number"
              value={tokenValue}
              placeholder="Enter Token Amount in Wei"
              className="w-full input placeholder-gray-700"
              id="flowRate"
              onChange={(e) => setTokenValue(Math.floor(e.target.value))}
            />
          </div>
        </div>
        <div className="set-permission-button">
          <button onClick={() => sendStreamWithOperator()}>Send Stream</button>
        </div>
      </div>
    </div>
  );
}

export default SendStream;
