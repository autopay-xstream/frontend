import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useAccount } from "wagmi";
import logowhite from "../image/LogoWhite.png";

//********************** connect wallet imports
import { AuthContext } from "@/providers/AuthProvider";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getNetwork } from "@wagmi/core";
import Image from "next/image";
import Dashboard from "../components/Dashboard";
import SendStream from "../components/SendStream";
import SendXStream from "../components/SendXStream";
import SideBar from "../components/SideBar";

//******************************************* */

const Web3 = require("web3");

export default function Home() {
  //********************** connect wallet imports

  const connectedWallet = useAccount();
  const { chain } = getNetwork();

  const authContext = useContext(AuthContext);

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
                <Dashboard
                  userAddress={authContext?.userAddress}
                  chain={authContext.chain}
                  isConnected={authContext?.isConnected}
                />
              ) : showSendStream ? (
                <SendStream />
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
