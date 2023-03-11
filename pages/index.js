import Head from "next/head";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";
import logowhite from "../image/LogoWhite.png";

//********************** connect wallet imports
import {
  ConnectButton
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Image from "next/image";
import Dashboard from "../components/Dashboard";
import Notifications from "../components/Notifications";
import SendStream from "../components/SendStream";
import SendXStream from "../components/SendXStream";
import SideBar from "../components/SideBar";
import { getNetwork } from "@wagmi/core";
import { subgraphURIs } from "@/data/config";


//******************************************* */

const Web3 = require("web3");

export default function Home() {
  //********************** connect wallet imports

  const connectedWallet = useAccount();
  const { chain } = getNetwork();


  //********************** connect wallet imports

  const [showDashboard, setDashboard] = useState(false);
  const [showSendStream, setSendStream] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showXStream, setShowXStream] = useState(false);
  const [showStream, setShowStream] = useState(false);

  useEffect(() => {
    setDashboard(true);
  }, []);

  return (
    <>
      <Head>
        <title>XStream</title>
        <meta
          name="description"
          content="Cross chain streaming using AutoPay XStream"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main font-poppins">
        {/* ******************** Navbar ******************** */}

        <div className="navbar flex justify-between p-2 items-center absolute w-full px-4 z-10">
          <div className="navbar-logo flex-auto w-64  py-4 px-3">
            {/* //logo  */}
            <Image src={logowhite} alt="logo" height={40} />
          </div>
          <div className="connect-wallet">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>
        </div>

        {/* ******************** main ******************** */}

        <div className="flex  min-h-screen">
          {/* ****************main left panel************** */}
          <SideBar
            setDashboard={setDashboard}
            setSendStream={setSendStream}
            setShowNotification={setShowNotification}
            setShowXStream={setShowXStream}
            showXStream={showXStream}
            showDashboard={showDashboard}
            showSendStream={showSendStream}
            showNotification={showNotification}
            setShowStream={setShowStream}
            showStream={showStream}
          />

          {/* ****************main right panel************** */}
          <div className="w-full bg-[#F4F4F4]">
            <div className="inside-main-right">
              {showDashboard ? (
                <Dashboard chain = {chain}/>
              ) : showSendStream ? (
                <SendStream />
              ) : showXStream ? (
                <SendXStream />
              ) : showNotification ? (
                <Notifications
                  subgraphURI = {subgraphURIs['xstream'][chain.id]}
                  address={connectedWallet.address}

                />
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
